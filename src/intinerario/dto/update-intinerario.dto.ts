import { PartialType } from '@nestjs/mapped-types';
import { CreateIntinerarioDto } from './create-intinerario.dto';

export class UpdateIntinerarioDto extends PartialType(CreateIntinerarioDto) {}
