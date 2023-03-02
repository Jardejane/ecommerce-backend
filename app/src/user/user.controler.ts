import {Controller, Post, Body, Put, Param, Delete, UseGuards, Get, } from '@nestjs/common';
import { CreateUserDTO } from './dto_user/create_user_dto';
import {UserService} from './user.service'


@Controller('User')
export class UserController{
    
  constructor(private userService : UserService){}
  
  @Get('/')
  async getAll(){
    const product = await this.userService.getAllUser()
    return product
  }
  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body()createUserDto :  CreateUserDTO){
       const user = await this.userService.updateUser(id, createUserDto)
       return user
  }
  @Delete('/:id')
  async deleteUser(@Param('id') id: string){
    const user = await this.userService.deleteUser(id)
    return {messagem:'OK'}
  }

}
