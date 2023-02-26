import { Module } from '@nestjs/common';
import { dataModule } from './database/data.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [dataModule, ProductModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
