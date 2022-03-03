import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserWatchTime {
  @PrimaryColumn()
  @Field(() => String)
  watch_time_id: string;

  @Column()
  @Field(() => String)
  user_id: string;

  @Column()
  @Field(() => String)
  product_id: string;

  @Column()
  @Field(() => Int)
  watch_time_seconds: number;
}
