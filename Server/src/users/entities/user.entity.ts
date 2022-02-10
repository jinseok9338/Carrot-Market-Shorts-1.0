import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { IsDate } from 'class-validator';
import { Comment } from '../../comment/entities/comment.entity';
import { WatchTimes } from 'src/watch-time/entities/watch-time.entity';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class User {
  @PrimaryColumn()
  @Field(() => String)
  user_id: string;

  @Column({ unique: true })
  @Field((type) => String)
  user_name: string;

  @Column({ unique: true })
  @Field((type) => String)
  email?: string;

  @Column()
  @Field((type) => String)
  first_name?: string;

  @Column()
  @Field((type) => String)
  last_name?: string;

  @Column() // Make it not nullable later
  @Field((type) => Boolean)
  confirm_email?: boolean;

  @Column()
  // @Field((type) => String) // You are not supposed to query the password
  password: string;

  @Column('simple-array')
  @Field(() => [String], { nullable: true })
  interested: string[];

  @OneToMany(() => Comment, (comment) => comment.user_id, {
    nullable: true,
    cascade: true,
  })
  @Field((type) => [Comment], { nullable: true })
  comments: Comment[];

  @Column()
  @Field((type) => WatchTimes, { nullable: true })
  watch_time: WatchTimes;

  @OneToMany(() => Product, (product) => product.user, {
    nullable: true,
    cascade: true,
  })
  @Field(() => [Product], { nullable: true })
  products?: Product[];

  @IsDate()
  @Column({ nullable: true }) // Make it not nullable later
  @Field((type) => Date, { nullable: true })
  expiration_email_time?: Date | null;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (e) {
      console.log(e.message);
      throw new InternalServerErrorException();
    }
  }
}

@ObjectType()
export class ReturnType {
  @Field()
  ok: boolean;

  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  user?: User;
}
