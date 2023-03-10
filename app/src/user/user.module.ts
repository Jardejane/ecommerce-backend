import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../utils/schemas/user.schema';
import { UserController } from './user.controler';
import { UserService } from './user.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService,],
  exports: [UserService]
})
export class UserModule {}
