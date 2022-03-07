import { CreateProductWatchTimeInput } from './create-product-watch-time.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductWatchTimeInput extends PartialType(CreateProductWatchTimeInput) {
  @Field(() => Int)
  id: number;
}
