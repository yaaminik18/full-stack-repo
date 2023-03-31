import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserBook } from './books/books.model';


@Module({
  imports: [BooksModule, SequelizeModule.forRoot({
    logging:console.log,
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'yaakhushi9',
    database: 'postgres',
    autoLoadModels:true,
    //add models
    models:[UserBook],
    synchronize:true
  }),],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
