import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { ProductData } from 'src/users/type/DataType';
import { Product } from 'src/products/entities/product.entity';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class User {
  @Column({ unique: true, name: 'userId', primary: true })
  @Field((type) => String)
  userId: string;

  @Column({ unique: true })
  @Field((type) => String)
  email?: string;

  @Column()
  @Field((type) => String)
  firstName?: string;

  @Column()
  @Field((type) => String)
  lastName?: string;

  @Column() // Make it not nullable later
  @Field((type) => Boolean)
  confirmEmail?: boolean;

  @Column()
  // @Field((type) => String) // You are not supposed to query the password
  password: string;

  @OneToMany(() => Product, (product) => product.user, { nullable: true })
  @Field(() => [Product], { nullable: true })
  products?: Product[];

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
