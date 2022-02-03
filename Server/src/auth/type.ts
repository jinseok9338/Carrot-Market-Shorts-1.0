export interface UserInfo {
  user_name: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  confirm_email?: boolean;
}

export interface CustomReturnType {
  statusCode: number;
  error?: string;
  data?: any;
}
