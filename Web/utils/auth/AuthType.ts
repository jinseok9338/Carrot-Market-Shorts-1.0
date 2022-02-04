import { Dispatch, SetStateAction } from "react";

export interface SignUpInput {}

export interface authContextType {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  signup?: (signUpInput: SignUpInput) => void;
  signout?: () => void;
  sendPasswordResetEmail?: (email: string) => void;
  confirmPasswordReset?: (code: any, password: string) => void;
}

export interface UserType {
  confirm_email: boolean;
  email: string;
  exp: Date;
  expiration_email_time: string | null;
  first_name: string;
  iat: Date;
  last_name: string;
  user_id: number | string;
  user_name: string;
}
