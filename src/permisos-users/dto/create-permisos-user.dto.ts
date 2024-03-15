import { IsBoolean, IsUUID } from 'class-validator';

export class CreatePermisosUserDto {
  @IsBoolean({ message: 'El campo home es booleano' })
  home: boolean;
  @IsBoolean({ message: 'El project home es booleano' })
  project: boolean;
  @IsBoolean({ message: 'El campo os es booleano' })
  os: boolean;
  @IsBoolean({ message: 'El campo intinerario es booleano' })
  intinerario: boolean;
  @IsBoolean({ message: 'El campo permisos es booleano' })
  permisos: boolean;
  @IsBoolean({ message: 'El sharepoint home es booleano' })
  sharepoint: boolean;
  @IsBoolean({ message: 'El campo documentacion es booleano' })
  documentacion: boolean;
  @IsUUID()
  rolId: string;
}
