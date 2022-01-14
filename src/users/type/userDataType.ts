import { DeepPartial } from 'typeorm';

export interface ProductData {
  userId: string; //It's better to use uuid but.... It's just a prototype
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
  confirmEmail: DeepPartial<boolean>;
  firstName: string;
  lastName: string;
  products: ProductData[];
}
