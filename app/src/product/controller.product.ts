import{ Controller, Post, Get, Put, Body, Param, Query, NotFoundException} from '@nestjs/common'
import { ProductService} from './service.product'
import{ CreateProductDTO} from './dto/dto.product'

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
  async getId (@Param('id') _id: string){
    const product = await this.productService.getIdProduct(_id)
    if (!product) throw new NotFoundException('Product does not exist!');
    return product;
  }
}