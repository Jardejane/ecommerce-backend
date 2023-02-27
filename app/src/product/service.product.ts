import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product,ProductDocument } from '../utils/schemas/product.schema';
import {FilterProductDTO} from './dto/dto.filter_product'
import {CreateProductDTO} from './dto/dto.product'

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel : Model<ProductDocument>) {}

    async addProduct(createProdutoDto : CreateProductDTO) : Promise<Product>{
        const newProduct = await this.productModel.create(createProdutoDto)
        return newProduct.save()
    }
}