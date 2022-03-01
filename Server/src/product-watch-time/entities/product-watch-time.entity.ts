import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { UserWatchTime } from 'src/user-watch-time/entities/user-watch-time.entity';

import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductWatchTime {
  @PrimaryColumn()
  @Field(() => String)
  product_watch_time_id: string;

  @Column('simple-array')
  @Field(() => [String])
  user_ids: string[];

  @Column()
  @Field(() => [UserWatchTime])
  user_watch_times: UserWatchTime[];

  @Column()
  @Field(() => Product)
  product: Product;
}
