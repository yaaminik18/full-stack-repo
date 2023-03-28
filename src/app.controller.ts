import { Controller, Get } from '@nestjs/common';

@Controller('/app')

export class AppController {
    @Get()
    getOutput(){
        return("hello i am working")
    }
}
