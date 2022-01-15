import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  userId: string;

  @ManyToOne(() => User, (user) => user.products)
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

  @Column(() => String)
  @Field(() => [String])
  images?: string[];

  @Column()
  @Field(() => String)
  video: string;
}
