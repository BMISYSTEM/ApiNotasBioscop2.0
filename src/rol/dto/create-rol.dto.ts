import { IsString, MinLength } from 'class-validator';

export class CreateRolDto {
  @IsString({ message: 'El nombre del rol es obligatorio' })
  @MinLength(1, { message: 'El nombre es muy corto' })
  nombre: string;
}
