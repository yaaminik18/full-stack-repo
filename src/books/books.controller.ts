import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put ,Res, ValidationPipe} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from "./books.dto";
import { response } from 'express';
import { UserBook } from './books.model';

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){}
    //get all books
    @Get()
        getAllBooks(){
        return this.booksService.findAll();
        }

    //get book by id
    @Get(':id')
        getBookById(@Param('id')id:number){
        return this.booksService.findOne(id);
        }
   
    //add a new book
    @Post('/add')
        async addBooks(@Res() response, @Body(ValidationPipe)userbook:Book){
        console.log(userbook)
        const newBook=await this.booksService.create(userbook);
        return response.status(HttpStatus.OK).json({
            newBook
        })
        }

    //update data
    @Put(':id/update')
        updateBook(@Param('id')id:number,@Body(ValidationPipe)updatedbook:Book){
            console.log(updatedbook)
        return this.booksService.update(id,updatedbook)
        }
    
    //delete data with specified id
    @Delete('/delete/:id')
        delete(@Param('id')id:number){
        return this.booksService.delete(id)
        }
    

   
}
