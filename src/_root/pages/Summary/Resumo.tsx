// src/pages/Summary/Resumo.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DataContext } from '@/context/DataContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types';

type SummaryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Summary'>;

export function Summary() {
  const { totalValues } = useContext(DataContext)!; // Use ! to assert non-null since defaultValue is provided

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo</Text>
      <FlatList
        data={totalValues}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}: R$ {item.value.toFixed(2)}</Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Summary;
