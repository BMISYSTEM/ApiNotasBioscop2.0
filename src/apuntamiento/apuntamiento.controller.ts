import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApuntamientoService } from './apuntamiento.service';
import { CreateApuntamientoDto } from './dto/create-apuntamiento.dto';
import { UpdateApuntamientoDto } from './dto/update-apuntamiento.dto';

@Controller('apuntamiento')
export class ApuntamientoController {
  constructor(private readonly apuntamientoService: ApuntamientoService) {}

  @Post()
  create(@Body() createApuntamientoDto: CreateApuntamientoDto) {
    return this.apuntamientoService.create(createApuntamientoDto);
  }

  @Get()
  findAll() {
    return this.apuntamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apuntamientoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApuntamientoDto: UpdateApuntamientoDto,
  ) {
    return this.apuntamientoService.update(+id, updateApuntamientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apuntamientoService.remove(+id);
  }
}
