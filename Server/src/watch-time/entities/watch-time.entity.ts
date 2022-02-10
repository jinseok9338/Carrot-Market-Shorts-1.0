import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
export class WatchTimes {
  @Column()
  @Field((type) => [WatchTime])
  watch_time?: WatchTime[];
}

class WatchTime {
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
