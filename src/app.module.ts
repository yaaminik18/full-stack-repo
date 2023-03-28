import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [BooksModule, SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'yaakhushi9',
    database: 'postgres',
    autoLoadModels:true,
    synchronize:true
  }),BooksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
