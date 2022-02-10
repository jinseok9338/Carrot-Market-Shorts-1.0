import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WatchTime {
  @PrimaryColumn()
  @Field((type) => String)
  product_id?: string;

  @Column()
  @Field((type) => String)
  watch_time_seconds?: string;

  @Column()
  @Field((type) => String)
  tag?: string;
}
