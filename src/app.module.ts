import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './pets/pets.module';
import { join } from 'node:path/win32';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //Code first approach
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.__DB_HOST__,
      port: parseInt(process.env.__DB_PORT__),
      username: process.env.__DB_USER__,
      password: process.env.__DB_PASSWORD__,
      database: process.env.__DB_NAME__,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      // url: "process.env.DATABASE_URL",
      synchronize: true, // In Prod use Migration
      entities: ['dist/**/*/entity{.ts,.js}'],
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
