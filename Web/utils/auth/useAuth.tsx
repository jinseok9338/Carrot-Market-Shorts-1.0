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

  const signup = (signUpInput: SignUpInput) => {};
  const signout = () => {};
  const sendPasswordResetEmail = (email: string) => {};
  const confirmPasswordReset = (code: any, password: string) => {};

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {}, []);
  // Return the user object and auth methods
  return {
    user,
    setUser,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
