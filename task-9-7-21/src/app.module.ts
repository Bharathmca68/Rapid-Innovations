import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { RegisterModule } from './userregister/register.module';

@Module({
  imports: [ProductsModule,RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
