import React, { createContext, useContext, useState } from 'react';
import api from 'src/services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem('user'));

    async function Login({username, password}) {

      const response = await api.post('/api/auth/signin', {
        username: username,
        password: password,
      });

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`
      const { token, type, ... currentUser } = response.data;
      setUser(currentUser);
      localStorage.setItem('user', JSON.stringify(currentUser));
      localStorage.setItem('token', response.data.token);
    }

    function Logout() {
      setUser(null);
  
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
  const context = useContext(AuthContext);
 
  return context;
 }


export default AuthContext;