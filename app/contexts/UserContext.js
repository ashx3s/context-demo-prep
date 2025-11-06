"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Herbert",
    loggedIn: false,
  });
  const toggleUserLogin = () => {
    setUser((prev) => ({ ...prev, loggedIn: !prev.loggedIn }));
  };
  return (
    <UserContext.Provider value={{ user, toggleUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
