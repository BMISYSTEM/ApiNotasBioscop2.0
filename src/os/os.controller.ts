import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OsService } from './os.service';
import { CreateODto } from './dto/create-o.dto';
import { UpdateODto } from './dto/update-o.dto';

@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {}

  @Post()
  create(@Body() createODto: CreateODto) {
    return this.osService.create(createODto);
  }

  @Get()
  findAll() {
    return this.osService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.osService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateODto: UpdateODto) {
    return this.osService.update(+id, updateODto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.osService.remove(+id);
  }
}
