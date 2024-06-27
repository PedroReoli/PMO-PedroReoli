// src/pages/Summary/Resumo.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types'; // Renomeando Props como PropsType
import { DataContext } from '@/context/DataContext';

type SummaryScreenRouteProp = RouteProp<RootStackParamList, 'Summary'>;

type Props = {
  route: SummaryScreenRouteProp;
};

export function Summary({ route }: Props) {
  const { totalValues } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo de Faturamento</Text>
      <FlatList
        data={totalValues}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemKey}>{item.key}</Text>
            <Text style={styles.itemValue}>R$ {item.value.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  itemKey: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemValue: {
    fontSize: 16,
    color: '#333',
  },
});
