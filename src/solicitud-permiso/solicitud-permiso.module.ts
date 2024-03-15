import { Module } from '@nestjs/common';
import { SolicitudPermisoService } from './solicitud-permiso.service';
import { SolicitudPermisoController } from './solicitud-permiso.controller';

@Module({
  controllers: [SolicitudPermisoController],
  providers: [SolicitudPermisoService],
})
export class SolicitudPermisoModule {}
