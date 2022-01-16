import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @ManyToOne((type) => User, (user) => user.products, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;

  @Column({ unique: true, primary: true, name: 'product_id' })
  @Field(() => String)
  product_id: string;

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
