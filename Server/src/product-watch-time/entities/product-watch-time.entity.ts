import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { UserWatchTime } from 'src/user-watch-time/entities/user-watch-time.entity';
import { defaultValue } from 'src/utils/defaultValue';

import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductWatchTime {
  @PrimaryColumn()
  @Field(() => String)
  product_watch_time_id: string;

 

  @OneToMany(
    () => UserWatchTime,
    (user_watch_time) => user_watch_time.product.product_id,
    {
      nullable: true,
      cascade: true,
    },
  )
  @Field(() => [UserWatchTime])
  user_watch_times: UserWatchTime[];

  // I need to resolve this field
  @Column(() => Product)
  @Field(() => Product)
  product: Product;
}
