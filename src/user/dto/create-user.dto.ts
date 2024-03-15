import {
  IsBoolean,
  IsDate,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre es de tipo string' })
  @MinLength(1, { message: 'El nombre es muy corto ' })
  nombre: string;
  @IsString({ message: 'El apellido es de tipo string' })
  @MinLength(1, { message: 'El apellido es muy corto ' })
  apellido: string;
  @IsString({ message: 'La foto es de tipo string' })
  @MinLength(1, { message: 'El path de la foto es muy corto ' })
  foto: string;
  @IsDate({ message: 'La fecha de nacimiento es de tipo date' })
  fecha_nacimiento: Date;
  @IsDate({ message: 'La fecha de ingreso es de tipo date' })
  fecha_ingreso: Date;
  @IsBoolean({ message: 'activo es de tipo boolean' })
  activo: boolean;
  // columna de relacion con Rol
  @IsUUID()
  rolId: string;
  // columna de relacion con Area
  @IsUUID()
  areaId: string;
}
