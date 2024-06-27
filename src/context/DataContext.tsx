// src/context/DataContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Props } from '@/types';

type DataContextType = {
  users: Props[];
  totalValues: { key: string; value: number }[];
  addUser: (user: Props) => void;
  removeUser: (id: string) => void;
  calculateTotalValues: () => void;
};

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<Props[]>([]);
  const [totalValues, setTotalValues] = useState<{ key: string; value: number }[]>([]);

  const addUser = (user: Props) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const removeUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const calculateTotalValues = () => {
    const totals = users.reduce((acc, user) => {
      const key = `${user.supplier}-${user.state}`;
      if (!acc[key]) acc[key] = 0;
      acc[key] += user.invoiceValor + user.taxes;
      return acc;
    }, {});

    const calculatedValues = Object.entries(totals).map(([key, value]) => ({
      key,
      value: Number(value),
    }));

    setTotalValues(calculatedValues);
  };

  // Atualiza totalValues sempre que users mudar
  useEffect(() => {
    calculateTotalValues();
  }, [users]);

  return (
    <DataContext.Provider value={{ users, totalValues, addUser, removeUser, calculateTotalValues }}>
      {children}
    </DataContext.Provider>
  );
};
