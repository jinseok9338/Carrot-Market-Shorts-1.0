import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryColumn()
  @Field(() => String)
  comment_id: string;

  @Column()
  @Field(() => String)
  user_id: string;

  @Column()
  @Field(() => String)
  product_id: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;

  @Column()
  @Field(() => String)
  message: string;

  @Column()
  @Field(() => String)
  user_name: string;

  @Column()
  @Field(() => String)
  display_pic: string;

  @ManyToOne(() => Product, (product) => product.comments, {
    nullable: true,
  })
  @Field(() => Product)
  product: Product;
}
