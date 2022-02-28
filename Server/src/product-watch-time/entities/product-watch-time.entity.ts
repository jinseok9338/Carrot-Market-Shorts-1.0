import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';

import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserWatchTime {
  @PrimaryColumn()
  @Field(() => String)
  product_watch_time_id: string;

  @Column('simple-array')
  @Field(() => [String])
  user_ids: string[];

  @Column()
  @Field(() => [UserWatchTime])
  user_watch_times: UserWatchTime[];

  @Field(() => Int) // Resolved Field
  total_seconds: number;

  @Column()
  @Field(() => Product)
  product: Product;
}
