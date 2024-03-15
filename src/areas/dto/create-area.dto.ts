import { IsString, MinLength } from 'class-validator';

export class CreateAreaDto {
  @IsString({ message: 'El dato digitado no es un string' })
  @MinLength(1, { message: 'El nombre del area es obligatorio' })
  nombre: string;
}
