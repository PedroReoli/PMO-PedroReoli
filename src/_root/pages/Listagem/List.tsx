// src/pages/Listagem/List.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Users } from '@/components/Users/Users';
import { RootStackParamList, Props } from '@/types';
//navegaçao em paramtroo
type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

type ListProps = {
  route: {
    params: {
      users: Props[];
    };
  };
};

export function List({ route }: ListProps) {
  const { users } = route.params;
  const navigation = useNavigation<ListScreenNavigationProp>();

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Summary', { totalValues: [] })}>
        <Text style={styles.buttonText}>Resumo</Text>
      </TouchableOpacity>
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
  button: {
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
