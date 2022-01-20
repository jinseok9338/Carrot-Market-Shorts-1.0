import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { IsDate } from 'class-validator';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  user_id: number;

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
