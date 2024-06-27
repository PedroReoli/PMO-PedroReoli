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

const Summary = ({ route }: Props) => {
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
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>{item.key}</Text>
        <TouchableOpacity
          style={styles.showTotalButton}
          onPress={() => handleExpand(item.key)}
        >
          <Text style={styles.showTotalButtonText}>Mostrar Total</Text>
        </TouchableOpacity>
      </View>
      {expandedKey === item.key && (
        <View style={styles.details}>
          {transactions[item.key]?.map((transaction, index) => (
            <View key={index}>{renderDetailItem(transaction)}</View>
          ))}
          <Text style={styles.totalText}>Total: <Text style={styles.totalValue}>R$ {item.value.toFixed(2)}</Text></Text>
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
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  showTotalButton: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showTotalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  details: {
    marginTop: 8,
  },
  totalText: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
  totalValue: {
    color: '#007BFF',
  },
  detailItem: {
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
});

export default Summary;
