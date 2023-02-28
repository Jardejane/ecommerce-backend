import { LoginDto } from './dto';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {} // 2

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username);
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (user && isPasswordMatch) {
      return user;
    }
    return null;
  }

  async login(user: LoginDto) {
    const isValid = await this.validateUser(user.username, user.password);
    if (isValid) {
      const payload = {
        username: isValid.username,
        sub: isValid._id,
        roles: isValid.roles,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new Error('Cannot find user');
    }
  }
}