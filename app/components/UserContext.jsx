"use client"
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) {
      setUser(JSON.parse(session));
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}