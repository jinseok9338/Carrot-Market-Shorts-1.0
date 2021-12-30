import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './pets/pets.module';
import { join } from 'node:path/win32';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(process.env.DATABASE_URL);

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
      // url: 'postgres://iegootncokyvsa:8b69632c19af9b2dc418eceb782d8153b36cdee0e27381d6315b2c3a5bed4152@ec2-54-198-213-75.compute-1.amazonaws.com:5432/ddio4kogtjt097',
      synchronize: true, // In Prod use Migration
      entities: ['dist/**/*/entity{.ts,.js}'],
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
