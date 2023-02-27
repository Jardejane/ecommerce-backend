import{ Controller, Post, Get, Put, Body, Param, Query, NotFoundException} from '@nestjs/common'
import { ProductService} from './service.product'
import{ CreateProductDTO} from './dto/dto.product'
import { Product } from 'src/utils/schemas/product.schema'

@Controller('/story/products')
export class ProductController{
  constructor(private productService : ProductService){}
  
  @Post('/create')
  async addProduct(@Body() createProductDTO : CreateProductDTO){
    const product = await this.productService.addProduct(createProductDTO)
    return product
  }
  @Get('/')
  async getAll(){
    const product = await this.productService.getAllProduct()
    return product
  }
  @Get('/:id')
  async getId (@Param('id') id: string){
    const product = await this.productService.getIdProduct(id)
    return product;
  }
  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body()createProductDto : CreateProductDTO){
       const product = await this.productService.updateProduct(id, createProductDto)
       return product
  }
}