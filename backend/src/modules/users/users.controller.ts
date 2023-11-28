import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
import { LogDTO } from './dto/log.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UserDTO){
    return this.usersService.createUser(data);
  }

  @Post('login')
  async logUser(@Body() data: LogDTO){
    return this.usersService.login(data);
  }

  @Get()
  async getAll(){
    return this.usersService.getAll();
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: UserDTO){
    return this.usersService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param('id') id: string){
    return this.usersService.delete(id);
  }

}
