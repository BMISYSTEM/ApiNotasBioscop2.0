import { PartialType } from '@nestjs/mapped-types';
import { CreateApuntamientoDto } from './create-apuntamiento.dto';

export class UpdateApuntamientoDto extends PartialType(CreateApuntamientoDto) {}
