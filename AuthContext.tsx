import React from 'react';
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({auth: null, setAuth: null, logout: null});
const AuthProvider = ({ children }) => {
    const [auth, setAuthState] = useState({
        authToken: null,
        refreshToken: null,
        authenticated: false
    });

    const getAuthState = async () => {
        try {
            const authDataString = await AsyncStorage.getItem('auth');
            let authData = JSON.parse(authDataString);
            setAuthState(authData);
        } catch (e) {
            setAuthState({
                authToken: null,
                refreshToken: null,
                authenticated: false
            });
        }
    };

    const setAuth = async(auth) => {
        try {
            await AsyncStorage.setItem('auth', JSON.stringify(auth));
            setAuthState(auth);
        } catch (e) {
            Promise.reject(e);
        }
    };

    const logout = async() => {
        setAuthState({authToken: null, refreshToken: null, authenticated: false});
        try {
            await AsyncStorage.removeItem('auth');
        } catch (e) {
            Promise.reject(e);
        }
    }

    useEffect(() => {
        getAuthState();
    }, []);

    return (
        <AuthContext.Provider value={{auth, setAuth, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

export type authObject = {
    authToken: string,
    refreshToken: string,
    authenticated: boolean
}