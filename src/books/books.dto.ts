import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class Book{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsString()
    author:string;

    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsNumber()
    year:number
}