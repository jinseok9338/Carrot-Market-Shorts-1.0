import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

// What other user Info should I do ....

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => String)
  userId: string;

  @Column({ nullable: true })
  @Field((type) => String)
  email?: string;

  @Column({ nullable: true })
  @Field((type) => String)
  firstName?: string;

  @Column({ nullable: true })
  @Field((type) => String)
  lastName?: string;

  @Column({ nullable: true }) // Make it not nullable later
  @Field((type) => Boolean)
  confirmEmail?: boolean;

  @Column()
  // @Field((type) => String) // You are not supposed to query the password
  password: string;

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
