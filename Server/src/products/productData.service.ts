import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { getConnection, Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UpdateProductInput } from './dto/update-product.input';
import { youtube } from 'scrape-youtube';
import { Video } from 'scrape-youtube/lib/interface';

@Injectable()
export class ProductsDataService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private usersService: UsersService,
  ) {}

  async searchYoutube(): Promise<Video[]> {
    const results = await youtube.search('#shorts products');
    console.log(results.videos.length);
    return results.videos;
  }
}
