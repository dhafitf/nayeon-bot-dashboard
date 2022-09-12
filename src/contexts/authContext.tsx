import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext<any>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadFromLocal = window.localStorage.getItem("user");
    const data = JSON.parse(loadFromLocal!);
    setUser(data);
  }, []);

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    await axios.get("/api/logout");
    window.location.href = "/";
  };

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
