export interface LoginReturn {
  access_token: string;
}

export interface UserInfo {
  user_name: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  confirm_email?: boolean;
}
