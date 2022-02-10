import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryColumn() // UUId
  @Field(() => String)
  product_id: string;

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  user_id: string;

  @Column()
  @Field(() => String)
  product_name: string;

  @Column()
  @Field(() => Boolean)
  sold: boolean;

  @Column('simple-array')
  @Field(() => [String], { nullable: true })
  images?: string[];

  @Column()
  @Field(() => String)
  video: string;

  @Column()
  @Field(() => String)
  tag: string;
}
