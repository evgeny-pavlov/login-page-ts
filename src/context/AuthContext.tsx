import React, { createContext, useState, ReactNode, useContext } from 'react';
import { login as fakeLogin } from '../tools/fakeApi';
import { User } from "@/types/types"

type AuthContextType = {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => { },
  logout: () => { },
});

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string) => {
    fakeLogin(username).then((user) => {
      if (user) {
        setUser(user);
      } else {
        alert('User not found');
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
