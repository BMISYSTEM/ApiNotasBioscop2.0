import { Injectable } from '@nestjs/common';
import { CreateSolicitudPermisoDto } from './dto/create-solicitud-permiso.dto';
import { UpdateSolicitudPermisoDto } from './dto/update-solicitud-permiso.dto';

@Injectable()
export class SolicitudPermisoService {
  create(createSolicitudPermisoDto: CreateSolicitudPermisoDto) {
    return 'This action adds a new solicitudPermiso';
  }

  findAll() {
    return `This action returns all solicitudPermiso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitudPermiso`;
  }

  update(id: number, updateSolicitudPermisoDto: UpdateSolicitudPermisoDto) {
    return `This action updates a #${id} solicitudPermiso`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitudPermiso`;
  }
}
