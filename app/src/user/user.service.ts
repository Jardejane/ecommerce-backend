import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../utils/schemas/user.schema';
import { CreateUserDTO } from './dto_user/create_user_dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }
  async getAllUser(): Promise<User[]> {
    const getAllUser = await this.userModel.find().exec()
    return getAllUser
 }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await this.userModel.create(createUserDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return newUser.save();
  }
    
  async findUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({username: username});
    return user;
  }

  async updateUser(id: string,  createUserDTO: CreateUserDTO) {
    const upadateProduct = await this.userModel.findByIdAndUpdate(id, createUserDTO, { new: true })
    return upadateProduct;
}
async deleteUser(id: string): Promise<any> {
  const deleteUser = await this.userModel.findByIdAndRemove(id)
  return deleteUser
}
}