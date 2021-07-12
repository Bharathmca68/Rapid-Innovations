import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { RegisterModule } from './userregister/register.module';


@Module({
  imports: [ProductsModule, RegisterModule, MongooseModule.forRoot('mongodb+srv://mohan:abcd@cluster0.pwsps.mongodb.net/Testing?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
