import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryColumn()
  @Field(() => String)
  comment_id: string;

  @Column()
  @Field(() => String)
  user_id: string;

  @Column()
  @Field(() => String)
  product_id: string;

  @Column()
  @Field(() => Date)
  created_at: Date;

  @Column()
  @Field(() => Date)
  updated_at: Date;

  @Column()
  @Field(() => String)
  message: string;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;
}
