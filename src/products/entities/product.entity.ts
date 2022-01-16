import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  userId: string;

  @ManyToOne((type) => User, (user) => user.products)
  @JoinColumn({ referencedColumnName: 'userId' })
  @Field(() => User)
  user: User;

  @Column({ unique: true })
  @Field(() => String)
  productId: string;

  @Column()
  @Field(() => String)
  productName: string;

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
