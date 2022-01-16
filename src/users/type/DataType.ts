export interface ProductData {
  user_id: string;
  product_id: string;
  product_name: string;
  sold: boolean;
  images: string[];
  video: string;
}

export interface userData {
  user_id: string;
  password: string;
  email: string;
  confirm_email: boolean;
  first_name: string;
  last_name: string;
  products: ProductData[];
}
