import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryColumn } from 'typeorm';

@ObjectType()
export class WatchTimes {
  @PrimaryColumn()
  @Field((type) => String)
  watch_times_id?: string;

  @Column()
  @Field((type) => [WatchTime])
  watch_time?: WatchTime[];
}

class WatchTime {
  @PrimaryColumn()
  @Field((type) => String)
  watch_times_id?: string;

  @Column()
  @Field((type) => String)
  product_id: string;

  @Column()
  @Field((type) => String)
  watch_time_seconds?: string;

  @Column()
  @Field((type) => String)
  tag?: string;
}
