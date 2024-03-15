import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntinerarioService } from './intinerario.service';
import { CreateIntinerarioDto } from './dto/create-intinerario.dto';
import { UpdateIntinerarioDto } from './dto/update-intinerario.dto';

@Controller('intinerario')
export class IntinerarioController {
  constructor(private readonly intinerarioService: IntinerarioService) {}

  @Post()
  create(@Body() createIntinerarioDto: CreateIntinerarioDto) {
    return this.intinerarioService.create(createIntinerarioDto);
  }

  @Get()
  findAll() {
    return this.intinerarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intinerarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntinerarioDto: UpdateIntinerarioDto) {
    return this.intinerarioService.update(+id, updateIntinerarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intinerarioService.remove(+id);
  }
}
