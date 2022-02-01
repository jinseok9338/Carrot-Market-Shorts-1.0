import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import { Video } from 'scrape-youtube/lib/interface';
import { ProductsDataService } from './productData.service';

@Controller('productData')
export class ProductDataController {
  constructor(private productDataService: ProductsDataService) {}

  @Get('youtube')
  searchYoutue(@Param() params): Promise<Video[]> {
    return this.productDataService.searchYoutube();
  }
}
