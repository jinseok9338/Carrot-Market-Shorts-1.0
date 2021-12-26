import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './pets/pets.module';
import { join } from 'node:path/win32';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), //Code first approach
    }),
    PetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
