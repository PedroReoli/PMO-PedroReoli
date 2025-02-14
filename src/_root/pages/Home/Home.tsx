// src/pages/Home/Home.tsx
import React, { useState, useContext } from 'react';
import { Text, View, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { Users } from '@/components/Users/Users';
import { RootStackParamList, Props } from '@/types';
import { DataContext } from '@/context/DataContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
  const [invoice, setInvoice] = useState('');
  const [taxes, setTaxes] = useState('');
  const [invoiceValor, setInvoiceValor] = useState('');
  const [state, setState] = useState('');
  const [supplier, setSupplier] = useState('');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { users, addUser, removeUser } = useContext(DataContext);

  const validTaxCodes = [1234, 6789, 1708, 5952];
  const validStates = ['RJ', 'SP', 'MG'];
  const validSuppliers = ['Totvs', 'Microsoft'];

  function handleNewInvoice() {
    if (!invoice || !taxes || !invoiceValor || !state || !supplier) {
      return Alert.alert('Erro', 'Favor preencher todos os campos');
    }

    const taxCode = Number(taxes);
    if (!validTaxCodes.includes(taxCode)) {
      return Alert.alert('Erro', 'Código do imposto inválido');
    }

    if (!validStates.includes(state)) {
      return Alert.alert('Erro', 'Estado inválido');
    }

    if (!validSuppliers.includes(supplier)) {
      return Alert.alert('Erro', 'Fornecedor inválido');
    }

    const invoiceValue = Number(invoiceValor);
    let taxValue = 0;
    if ([1234, 6789].includes(taxCode)) {
      switch (state) {
        case 'RJ':
          taxValue = invoiceValue * 0.01;
          break;
        case 'SP':
          taxValue = invoiceValue * 0.02;
          break;
        case 'MG':
          taxValue = invoiceValue * 0.03;
          break;
      }
    }

    const data = {
      id: String(new Date().getTime()),
      invoice: Number(invoice),
      taxes: taxValue,
      invoiceValor: invoiceValue,
      state,
      supplier
    };

    addUser(data);
    setInvoice('');
    setTaxes('');
    setInvoiceValor('');
    setState('');
    setSupplier('');
  }

  function handleRemoveInvoice(id: string) {
    Alert.alert('Remover', 'Deseja remover a nota fiscal?', [
      {
        text: 'Sim',
        onPress: () => removeUser(id),
        style: 'destructive'
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Notas Fiscais</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nota Fiscal"
          keyboardType="numeric"
          value={invoice}
          onChangeText={setInvoice}
        />
        <TextInput
          style={styles.input}
          placeholder="Código do Imposto"
          keyboardType="numeric"
          value={taxes}
          onChangeText={setTaxes}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor da Nota Fiscal"
          keyboardType="numeric"
          value={invoiceValor}
          onChangeText={setInvoiceValor}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          autoCapitalize="characters"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Fornecedor"
          autoCapitalize="words"
          value={supplier}
          onChangeText={setSupplier}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleNewInvoice}
        >
          <Text style={styles.buttonText}>Incluir</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => handleRemoveInvoice(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhuma Nota Fiscal Cadastrada</Text>
        )}
      />
    </View>
  );
}
