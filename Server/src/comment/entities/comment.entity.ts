import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryColumn } from 'typeorm';

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
}
