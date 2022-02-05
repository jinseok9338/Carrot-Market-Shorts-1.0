import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { youtube } from 'scrape-youtube';
import { Video } from 'scrape-youtube/lib/interface';
import * as fs from 'fs';

@Injectable()
export class ProductsDataService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    private usersService: UsersService,
  ) {}

  async searchYoutube(number: number): Promise<Video[]> {
    let videos = [] as Video[];

    for (let i = 0; i < number; i++) {
      const result = await youtube.search(`#shorts products ${i}`);
      const videolist = result.videos;
      videolist.forEach((video) => videos.push(video));
    }
    let data = JSON.stringify(videos);
    fs.writeFileSync('youtube-video.json', data);

    return videos;
  }
}
