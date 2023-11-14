import { createContext } from "react";

export const UserContext = createContext({
  storeNumber: "001",
  location: "Hoboken, NJ",
});

export function UserProvider({ children }) {
  const user = {
    storeNumber: "001",
    location: "Torino, IT",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}