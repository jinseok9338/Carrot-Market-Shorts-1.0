import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @ManyToOne(() => User, (user) => user.products)
  @Field((type) => User)
  user: User;

  @Column()
  @Field((type) => String)
  userId: string;

  @Column({ unique: true })
  @Field((type) => String)
  productId?: string;

  @Column()
  @Field((type) => String)
  productName?: string;

  @Column()
  @Field((type) => Boolean)
  sold?: boolean;

  @Column(() => String, { array: true })
  @Field(() => [String])
  images?: string[];

  @Column()
  @Field((type) => String)
  video?: string;
}
