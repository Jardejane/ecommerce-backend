
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://jane:1234@cluster1.6mnmyes.mongodb.net/test'),ProductModule, AuthModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}