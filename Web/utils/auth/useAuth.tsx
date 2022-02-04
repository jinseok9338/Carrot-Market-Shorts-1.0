import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { authContextType, SignUpInput, UserType } from "./AuthType";
import axios from "axios";
import Cookie from "js-cookie";

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

  const signup = (signUpInput: SignUpInput) => {};
  const signout = () => {};
  const sendPasswordResetEmail = (email: string) => {};
  const confirmPasswordReset = (code: any, password: string) => {};

  return {
    user,
    setUser,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
