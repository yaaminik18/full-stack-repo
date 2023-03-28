import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction ) {
        
        let protocol=req.protocol;
        let host=req.get('host')
        let date=new Date().toDateString();
        console.log(protocol+" , "+host+ " , "+date)
        next();
    }
    
}