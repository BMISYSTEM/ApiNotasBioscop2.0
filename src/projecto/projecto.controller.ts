import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectoService } from './projecto.service';
import { CreateProjectoDto } from './dto/create-projecto.dto';
import { UpdateProjectoDto } from './dto/update-projecto.dto';

@Controller('projecto')
export class ProjectoController {
  constructor(private readonly projectoService: ProjectoService) {}

  @Post()
  create(@Body() createProjectoDto: CreateProjectoDto) {
    return this.projectoService.create(createProjectoDto);
  }

  @Get()
  findAll() {
    return this.projectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectoDto: UpdateProjectoDto) {
    return this.projectoService.update(+id, updateProjectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectoService.remove(+id);
  }
}
