import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from '../utils/schemas/product.schema'
import {ProductController} from './controller.product'
import {ProductService} from './service.product'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])
    ],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule { }