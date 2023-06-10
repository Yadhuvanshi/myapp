import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './users/app.controller';
import { BookService } from './book.service';



@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class RootModule {
  constructor()
  {
    console.log("root module");
  }
}
