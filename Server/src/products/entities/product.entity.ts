import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { WatchTime } from 'src/watch-time/entities/watch-times.entity';
import { ProductWatchTime } from 'src/product-watch-time/entities/product-watch-time.entity';
import { uuid } from 'uuidv4';

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

  @Column('simple-array')
  @Field(() => [String])
  tag: string[];

  @Column(() => ProductWatchTime)
  @Field((type) => ProductWatchTime)
  product_watch_time: ProductWatchTime;

  @OneToMany(() => Comment, (comment) => comment.product, {
    nullable: true,
    cascade: true,
  })
  @Field((type) => [Comment], { nullable: true })
  comments: Comment[];
}
