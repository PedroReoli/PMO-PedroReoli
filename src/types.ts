// src/types.ts

export type Props = {
    id: string;
    invoice: number;
    taxes: number;
    invoiceValor: number;
    state: string;
    supplier: string;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    Summary: { totalValues: { key: string; value: number }[] };
    List: { users: Props[] };
  };
  