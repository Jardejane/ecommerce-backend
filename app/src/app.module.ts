import { Module } from '@nestjs/common';
import { dataModule } from './database/data.module';

@Module({
  imports: [dataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
