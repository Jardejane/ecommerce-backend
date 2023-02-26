import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from '../database/schemas/product.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
    ]
})

export class ProductModule {}