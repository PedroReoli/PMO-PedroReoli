import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Props } from '@/types';

type Transaction = {
  invoiceNumber: number;
  value: number;
};

type DataContextType = {
  users: Props[];
  totalValues: { key: string; value: number }[];
  transactions: Record<string, Transaction[]>; // Alteração aqui para transações serem um objeto
  addUser: (user: Props) => void;
  removeUser: (id: string) => void;
  calculateTotalValues: () => void;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<Props[]>([]);
  const [totalValues, setTotalValues] = useState<{ key: string; value: number }[]>([]);
  const [transactions, setTransactions] = useState<Record<string, Transaction[]>>({}); // Inicialização vazia

  const addUser = (user: Props) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const removeUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const calculateTotalValues = () => {
    const totals: Record<string, { value: number; transactions: Transaction[] }> = users.reduce((acc, user) => {
      const key = `${user.supplier}-${user.state}`;
      const invoiceValue = user.invoiceValor + user.taxes;

      if (!acc[key]) {
        acc[key] = { value: 0, transactions: [] };
      }

      acc[key].value += invoiceValue;
      acc[key].transactions.push({
        invoiceNumber: user.invoice,
        value: user.invoiceValor,
      });

      return acc;
    }, {});

    const calculatedValues = Object.entries(totals).map(([key, { value }]) => ({
      key,
      value: Number(value),
    }));

    setTotalValues(calculatedValues);
const calculateTotalValues = () => {
  const totals: Record<string, Transaction[]> = users.reduce((acc, user) => {
    const key = `${user.supplier}-${user.state}`;
    const invoiceValue = user.invoiceValor + user.taxes;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push({
      invoiceNumber: user.invoice,
      value: user.invoiceValor,
    });

    return acc;
  }, {} as Record<string, Transaction[]>);

  const calculatedValues = Object.entries(totals).map(([key, transactions]) => ({
    key,
    value: transactions.reduce((acc, transaction) => acc + transaction.value, 0),
  }));

  setTransactions(totals);
  setTotalValues(calculatedValues);
};
  };

  useEffect(() => {
    calculateTotalValues();
  }, [users]);

  return (
    <DataContext.Provider
      value={{
        users,
        totalValues,
        transactions,
        addUser,
        removeUser,
        calculateTotalValues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
