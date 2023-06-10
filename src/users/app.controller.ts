import {Controller, Delete, Get, Post, Put,Param, HttpCode, Header} from "@nestjs/common";
import { BookService } from "src/book.service";
@Controller("/book")
export class BookController{
    constructor(private bookservice : BookService){}
    @Post("/add")
    addBook()
    {
        string:{
            return this.bookservice.addBook();
        }
    }
    @Delete("/delete")
    deleteBook()
    {
        string:{
            return this.bookservice.deleteBook();
        }
    }
    @Put("/update")
    updateBook()
    {
        string:{
            return this.bookservice.updateBook();
        }
    }
    @Get("/find")
    findallbooks()
    {
        string:{
            return this.bookservice.findallBooks();
        }

    }
    @Get('/findBookById/:bookId')
findBookById(@Param() params): string {
  console.log(params.bookId);
  return `This will find a book of id #${params.bookId}`;
}
}
