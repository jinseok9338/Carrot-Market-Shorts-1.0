import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { authContextType, SignUpInput, User } from "./AuthType";
import axios from "axios";

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
  const [user, setUser] = useState<User | null>(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  axios.defaults.withCredentials = true;

  const signup = (signUpInput: SignUpInput) => {};
  const signout = () => {};
  const sendPasswordResetEmail = (email: string) => {};
  const confirmPasswordReset = (code: any, password: string) => {};

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    // When user is logged in return the user and setUser
    // use User so we know that the user is there if the user is not there
    // then redirect to Login Page
  }, []);
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
