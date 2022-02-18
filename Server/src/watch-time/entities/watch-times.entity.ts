import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WatchTime {
  // Uuid
  @PrimaryColumn()
  @Field((type) => String)
  watch_time_id?: string;

  @Column()
  @Field((type) => String)
  user_id?: string;

  @Column()
  @Field((type) => String)
  product_id: string;

  @Column()
  @Field((type) => Int)
  watch_time_seconds?: number;

  // Do we need Product Entity?
}
