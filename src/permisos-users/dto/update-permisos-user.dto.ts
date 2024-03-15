import { PartialType } from '@nestjs/mapped-types';
import { CreatePermisosUserDto } from './create-permisos-user.dto';

export class UpdatePermisosUserDto extends PartialType(CreatePermisosUserDto) {}
