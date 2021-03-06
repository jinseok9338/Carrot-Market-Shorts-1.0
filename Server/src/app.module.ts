import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path/win32';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CommentModule } from './comments/comments.module';
import { TestDataModule } from './TestData/testData.module';
import { UserWatchTimeModule } from './user-watch-time/user-watch-time.module';
import { ProductWatchTimeModule } from './product-watch-time/product-watch-time.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //Code first approach
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      database: 'mydb',
      synchronize: true, // In Prod use Migration
      entities: ['dist/**/*.entity{.ts,.js}'],
      // logging: true, // Use it when we have problem with query or mutation
      dropSchema: true,
      installExtensions: true,
      cache: true,
      migrationsRun: true,
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    CommentModule,
    TestDataModule,
    UserWatchTimeModule,
    ProductWatchTimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
