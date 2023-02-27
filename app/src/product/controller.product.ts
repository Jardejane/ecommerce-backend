import{ Controller, Post, Get, Put, Body, Param, Query, NotFoundException} from '@nestjs/common'
import { ProductService} from './service.product'
import{ CreateProductDTO} from './dto/dto.product'

@Controller('story/products')
export class ProductController{
  constructor(private productService : ProductService){}
  
  @Post('/create')
  async addProduct(@Body() createProductDTO : CreateProductDTO){
    const product = await this.productService.addProduct(createProductDTO)
    return product
  }
}