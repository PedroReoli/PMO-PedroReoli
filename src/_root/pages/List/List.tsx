// src/pages/List/List.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Users } from '@/components/Users/Users';
import { DataContext } from '@/context/DataContext';

export function List() {
  const { users, removeUser } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Notas Fiscais</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => removeUser(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhuma nota fiscal cadastrada</Text>
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
    color: '#333',
    textAlign: 'center',
  },
  emptyListText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
    color: '#666',
  },
});
