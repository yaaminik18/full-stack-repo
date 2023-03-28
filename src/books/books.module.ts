import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BooksController } from './books.controller';
import { BookMiddleware } from './books.middleware';
import { UserBook } from './books.model';

import { BooksService } from './books.service';

@Module({
  imports:[SequelizeModule.forFeature([UserBook])],
  controllers: [BooksController],
  providers: [ BooksService,],
  exports:[]
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('books')
  }
   
}
