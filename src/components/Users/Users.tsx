//componentes/Users/Users.tsx 
import { Text, TouchableOpacity, View ,ScrollView } from "react-native";

import { styles } from "./styles";

type Props = {
  id: string,
  invoice: number,
  taxes: number,
  invoiceValor: number,
  state: string,
  supplier: string
}

type PropsData = {
  data: Props
  onRemove: () => void
}

export function Users({ data, onRemove }: PropsData) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.middle}>
          <Text style={styles.name}>
            Nota Fiscal: {data.invoice}
          </Text>
          <Text style={styles.name}>
            Código do Imposto: {data.taxes}
          </Text>
          <Text style={styles.name}>
            Valor da Nota Fiscal: {data.invoiceValor}
          </Text>
          <Text style={styles.name}>
            Estado: {data.state}
          </Text>
          <Text style={styles.name}>
            Fornecedor: {data.supplier}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}
