import { Product } from './entities/product.entity';

export interface PaginationResult {
  results: Product[];
  total: number;
  next?: string;
  previous?: string;
}
