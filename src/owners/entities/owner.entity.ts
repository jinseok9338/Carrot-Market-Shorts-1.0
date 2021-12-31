import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
