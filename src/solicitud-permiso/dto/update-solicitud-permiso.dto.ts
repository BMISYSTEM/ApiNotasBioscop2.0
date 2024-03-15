import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudPermisoDto } from './create-solicitud-permiso.dto';

export class UpdateSolicitudPermisoDto extends PartialType(CreateSolicitudPermisoDto) {}
