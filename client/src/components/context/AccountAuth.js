import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});

  return (
    <AuthContext.Provider value={{ account, setAccount, person, setPerson }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
