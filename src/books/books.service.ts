import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './books.dto';
import { BookIn } from './books.interface';
import { UserBook } from './books.model';

@Injectable()

export class BooksService {
    constructor(
        @InjectModel(UserBook)
        private userModel: typeof UserBook,
      ) {}

    async findAll(): Promise<UserBook[]> {
        return this.userModel.findAll();
    }

    async add(userbook:UserBook):Promise<UserBook>{
        return this.userModel.create();
    }
   /* public books: Book[]=[];
    
    //find all books
    
    getBooks() : Book[]{
        return this.books;
    }

    //add books
    addBooks(book:Book) : BookIn{
        this.books.push(book);
        console.log('book has been successfully added');
        return{ msg:'book has been succesfully added'} ;
    }

    //update books
    updateBooks(book:Book) : string{
        let index=this.books.findIndex((currentBook)=>{
            return currentBook.id===book.id;
        })
        this.books[index]=book;
        console.log('book has been successfully updated');
        return'book has been successfully updated';
        
    }

    //delete book
    deleteBook(id:number):string{
       this.books=this.books.filter((book)=>{
        return book.id!==id
       })
        console.log('book has been successfully deleted');
        return'book has been successfully deleted';  
    }*/
}
