import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { authContextType, UserType } from "./AuthType";

const authContext = createContext<authContextType | null>(null);

interface ProvideAuthProps {
  children: ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<UserType | null>(null);
  console.log(user, "auth User");

  const signout = () => {
    setUser(null);
  };

  return {
    user,
    setUser,
    signout,
  };
}
