import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { Book } from './books.dto';
import { BookIn } from './books.interface';
import { UserBook } from './books.model';
import { log } from 'console';

@Injectable()

export class BooksService {
    constructor(
        @InjectModel(UserBook)
        private userModel: typeof UserBook,
        
      ) {};
     
    async findAll(): Promise<UserBook[]> {
        return this.userModel.findAll();
        } 

    async findOne(id):Promise<UserBook>{
        return this.userModel.findOne(id)
    }


    create(bookDto:Book){
        console.log(bookDto)
        let userbook:UserBook=new UserBook()
        return this.userModel.create(
            {bookName:bookDto.bookName,
            authorName:bookDto.authorName,
            year:bookDto.year})
        }

    
    update(id:number,bookDto:Book){
        console.log(bookDto);
        this.userModel.update(
            {bookName:bookDto.bookName,
            authorName:bookDto.authorName,
            year:bookDto.year}, 
                {where:
                    {id:id}})
    }


    delete(delid:number){
        return this.userModel.destroy({
            where: {
               id: delid //this will be your id that you want to delete
            }
         }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
           if(rowDeleted === 1){
              console.log('Deleted successfully');
            }
         }, function(err){
             console.log(err); 
         });
        
    }
    
}
