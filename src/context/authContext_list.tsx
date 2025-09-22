import React, { createContext, useContext } from "react";
import { Alert } from "react-native";

export const AuthContextList: any = createContext({});

export const AuthProviderList = ({ children }: any) => {
  const onOpen = () => {
    Alert.alert("Atenção", "Modal aberto!");
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {children}
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);
