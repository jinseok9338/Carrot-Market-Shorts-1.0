import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true }) // For TypeOrm
  @Field({ nullable: true }) // For graphQl
  type?: string;

  @Column()
  @Field((type) => Int)
  ownerId: number;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;
}
