import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({ unique: true })
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

  @Column({ array: true })
  @Field((type) => [String])
  images?: string;

  @Column()
  @Field((type) => String)
  video?: string;
}
