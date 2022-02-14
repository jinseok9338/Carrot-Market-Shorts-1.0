import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WatchTime {
  @PrimaryColumn()
  @Field((type) => String)
  product_id?: string;

  @Column(() => Product)
  @Field((type) => Product)
  product: Product;

  @Column()
  @Field((type) => String)
  watch_time_seconds?: string;
}
