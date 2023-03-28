import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put ,Res} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from "./books.dto";
import { response } from 'express';
import { UserBook } from './books.model';

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){}
    //get all books
    /*
    @Get()
    getAllBooks(){
        return this.booksService.getBooks();
    }
    @Post('/add')
    add(@Body() book:Book){
    return this.booksService.addBooks(book);
    }

    @Put('/update')
    update(@Body() book:Book){
    return this.booksService.updateBooks(book);
    }

    @Delete('/delete/:id')
    delete(@Param('id') bookid:number){
    return this.booksService.deleteBook(bookid);
    }
*/
@Get()
    async fetchAll(@Res() response) {
        const books = await this.booksService.findAll();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

@Post('/add')
    async addBooks(@Res() response, @Body()userbook:UserBook){
        const newBook=await this.booksService.add(userbook);
        return response.status(HttpStatus.OK).json({
            newBook
    })
}
}
