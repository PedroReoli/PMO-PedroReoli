// componentes/Users/Users.tsx 
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Props } from '@/types';

type PropsData = {
  data: Props
  onRemove: () => void
}

export function Users({ data, onRemove }: PropsData) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.label}>
            Nota Fiscal: {data.invoice}
          </Text>
          <Text style={styles.label}>
            Código do Imposto: {data.taxes}
          </Text>
          <Text style={styles.label}>
            Valor da Nota Fiscal: R$ {data.invoiceValor.toFixed(2)}
          </Text>
          <Text style={styles.label}>
            Estado: {data.state}
          </Text>
          <Text style={styles.label}>
            Fornecedor: {data.supplier}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // Reduzi a margem inferior para 8
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1, // Adicionei uma borda com largura 1
    borderColor: '#ddd', // Cor da borda
    padding: 12, // Reduzi o padding para 12
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  info: {
    marginBottom: 8, // Reduzi o marginBottom para 8
  },
  label: {
    fontSize: 14, // Reduzi o tamanho da fonte para 14
    marginBottom: 4, // Reduzi o marginBottom para 4
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 8, // Reduzi o padding vertical para 8
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Reduzi o tamanho da fonte para 14
    fontWeight: 'bold',
  },
});
