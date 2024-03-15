import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { PermisosUsersService } from './permisos-users.service';
import { CreatePermisosUserDto } from './dto/create-permisos-user.dto';
// import { UpdatePermisosUserDto } from './dto/update-permisos-user.dto';

@Controller('permisos-users')
export class PermisosUsersController {
  constructor(private readonly permisosUsersService: PermisosUsersService) {}
  @Post()
  create(@Body() createPermisosUserDto: CreatePermisosUserDto) {
    return this.permisosUsersService.create(createPermisosUserDto);
  }

  @Get()
  findAll() {
    return this.permisosUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.permisosUsersService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePermisosUserDto: UpdatePermisosUserDto,
  // ) {
  //   return this.permisosUsersService.update(+id, updatePermisosUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.permisosUsersService.remove(+id);
  // }
}
