export interface SignUpInput {}

export interface authContextType {
  user: any;
  signin: (email: string, password: string) => void;
  signup: (signUpInput: SignUpInput) => void;
  signout: () => void;
  sendPasswordResetEmail: (email: string) => void;
  confirmPasswordReset: (code: any, password: string) => void;
}
