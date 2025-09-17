import React, { createContext, useContext } from "react";
import { Alert } from "react-native";

export const AuthContextlist: any = createContext({});

export const AuthProviderlist = (props : any): any => {
  
    const onOpen = () => {
        Alert.alert('atenção', 'clicou no botão!');
    }
    return (
        <AuthContextlist.Provider value={{ onOpen }}>
            {props.children}
        </AuthContextlist.Provider>
    )
}

export const useAuth = ()  => useContext(AuthContextlist);
