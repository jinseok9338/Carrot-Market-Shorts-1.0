export interface ProductData {
  userId: string;
  productId: string;
  productName: string;
  sold: boolean;
  images: string[];
  video: string;
}

export interface userData {
  userId: string;
  password: string;
  email: string;
  confirmEmail: boolean;
  firstName: string;
  lastName: string;
  products: ProductData[];
}
