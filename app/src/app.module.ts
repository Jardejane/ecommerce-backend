
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://jane:1234@cluster1.6mnmyes.mongodb.net/test'),ProductModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}