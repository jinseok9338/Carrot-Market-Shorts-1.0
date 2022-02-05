export interface ProductData {
  user_id: number;
  product_id: string;
  product_name: string;
  sold: boolean;
  images: string[];
  video: string;
}

export interface UserUpdateInfo {
  user_name?: string;
  password?: string;
  email?: string;
  confirm_email?: boolean;
  first_name?: string;
  last_name?: string;
  expiration_email_time?: Date;
}
