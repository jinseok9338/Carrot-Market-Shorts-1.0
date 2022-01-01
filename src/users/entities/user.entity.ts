import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';

// What other user Info should I do ....

@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => String)
  userId: string;

  @Column()
  @Field((type) => String)
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
