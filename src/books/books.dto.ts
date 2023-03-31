import { IsNotEmpty, IsNumber, IsString } from "class-validator";

//expecting from user

export class Book{
    @IsNotEmpty()
    @IsString()
    bookName:string;

    @IsString()
    @IsNotEmpty()
    authorName:string;

    @IsNumber()
    @IsNotEmpty()
    year:number
}