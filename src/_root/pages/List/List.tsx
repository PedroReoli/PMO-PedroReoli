// src/pages/List/List.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Users } from '@/components/Users/Users';
import { Props } from '@/types';

type ListProps = {
  route: {
    params: {
      users: Props[];
    };
  };
};

export function List() {
  const route = useRoute();
  const { users } = route.params as ListProps['route']['params'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Notas Fiscais</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => {}}
          />
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
});
