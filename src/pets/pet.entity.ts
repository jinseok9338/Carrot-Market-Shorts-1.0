import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
