import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-na'

const AuthContext = createContext({});

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function signIn(email, password) {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: {
                user: {
                  id: 1,
                  email: "leomassak@outlook.com",
                  name: "Leonardo Massak",
                },
              },
            });
          }, 2000);
        });
    
        const { user } = response.data;
        await AsyncStorage.setItem("@inter-bank:user", JSON.stringify(user));
        setUser(user);
      }
    
      async function signOut() {
        await AsyncStorage.removeItem("@inter-bank:user");
        setUser(null);
      }

      useEffect(() => {
        async function loadStorageData() {
          const storagedUser = await AsyncStorage.getItem("@inter-bank:user");
    
          if (storagedUser) {
            setUser(JSON.parse(storagedUser));
          }
    
          setLoading(false);
        }
    
        loadStorageData();
      }, []);
    
    return (
        <AuthContext.Provider value={{user, signIn, signOut, signed: !!user, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

