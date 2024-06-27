import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/types';
import { DataContext } from '@/context/DataContext';

type SummaryScreenRouteProp = RouteProp<RootStackParamList, 'Summary'>;

type Props = {
  route: SummaryScreenRouteProp;
};

type Transaction = {
  invoiceNumber: number;
  value: number;
};

export function Summary({ route }: Props) {
  const { totalValues, transactions } = useContext(DataContext);
  const navigation = useNavigation();
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleExpand = (key: string) => {
    if (expandedKey === key) {
      setExpandedKey(null);
    } else {
      setExpandedKey(key);
    }
  };

  const renderDetailItem = (transaction: Transaction) => (
    <View style={styles.detailItem}>
      <Text style={styles.detailText}>Nota Fiscal: {transaction.invoiceNumber}</Text>
      <Text style={styles.detailText}>Valor: R$ {transaction.value.toFixed(2)}</Text>
    </View>
  );

  const renderItem = ({ item }: { item: { key: string; value: number } }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleExpand(item.key)}>
      <Text style={styles.itemText}>{item.key}</Text>
      {expandedKey === item.key && (
        <View style={styles.details}>
          {transactions[item.key]?.map((transaction, index) => (
            <View key={index}>{renderDetailItem(transaction)}</View>
          ))}
          <Text style={styles.totalText}>Total: R$ {item.value.toFixed(2)}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo</Text>
      <FlatList
        data={totalValues}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  detailItem: {
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
  },
  totalText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Summary;
