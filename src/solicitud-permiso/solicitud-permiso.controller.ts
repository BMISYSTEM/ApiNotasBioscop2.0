import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudPermisoService } from './solicitud-permiso.service';
import { CreateSolicitudPermisoDto } from './dto/create-solicitud-permiso.dto';
import { UpdateSolicitudPermisoDto } from './dto/update-solicitud-permiso.dto';

@Controller('solicitud-permiso')
export class SolicitudPermisoController {
  constructor(private readonly solicitudPermisoService: SolicitudPermisoService) {}

  @Post()
  create(@Body() createSolicitudPermisoDto: CreateSolicitudPermisoDto) {
    return this.solicitudPermisoService.create(createSolicitudPermisoDto);
  }

  @Get()
  findAll() {
    return this.solicitudPermisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudPermisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudPermisoDto: UpdateSolicitudPermisoDto) {
    return this.solicitudPermisoService.update(+id, updateSolicitudPermisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudPermisoService.remove(+id);
  }
}
