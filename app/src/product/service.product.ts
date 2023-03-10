import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../utils/schemas/product.schema';
import { CreateProductDTO } from './dto/dto.product'

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) { }

    async addProduct(createProdutoDto: CreateProductDTO): Promise<Product> {
        const newProduct = await this.productModel.create(createProdutoDto)
        return newProduct.save()
    }
    async getAllProduct(): Promise<Product[]> {
        const getAllProduct = await this.productModel.find().exec()
        return getAllProduct
    }
    async getIdProduct(id: string): Promise<Product> {
        const getIdProduct = await this.productModel.findById(id).exec()
        return getIdProduct
    }
    async updateProduct(id: string, createProductDto: CreateProductDTO) {
        const upadateProduct = await this.productModel.findByIdAndUpdate(id, createProductDto, { new: true })
        return upadateProduct;
    }
    async deleteProduct(id: string): Promise<any> {
        const deleteProduct = await this.productModel.findByIdAndRemove(id)
        return deleteProduct
    }
    async FilterProduct(category: string) {
        let products = await this.getAllProduct();
        if (category) {
            products = products.filter(product => product.category === category)
        }
        return products;
    }
}