import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from 'src/auth/enums/role.enum'
import { ApiProperty } from '@nestjs/swagger'

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop()
  username: string;

  @ApiProperty()
  @Prop()
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop()
  roles: Role[];

}

export const UserSchema = SchemaFactory.createForClass(User);