import { PartialType } from '@nestjs/mapped-types';
import { CreateODto } from './create-o.dto';

export class UpdateODto extends PartialType(CreateODto) {}
