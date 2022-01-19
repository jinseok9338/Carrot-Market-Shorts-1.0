import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { uuid } from 'uuidv4';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  product_id: number;

  @ManyToOne(() => User, (user) => user.products, { onDelete: 'CASCADE' })
  @Field(() => User)
  @IsString()
  user: User;

  @Column()
  @Field(() => Int)
  user_id: number;

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
}
