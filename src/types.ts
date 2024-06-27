// src/types.ts
export type RootStackParamList = {
  Home: undefined;
  Summary: { totalValues: Array<{ key: string; value: number }> };
  List: { users: Props[] };
};

export type Props = {
  id: string;
  invoice: number;
  taxes: number;
  invoiceValor: number;
  state: string;
  supplier: string;
};

export type PropsData = {
  data: Props;
  onRemove: () => void;
};
