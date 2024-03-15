import { PartialType } from '@nestjs/mapped-types';
import { CreateSharepointDto } from './create-sharepoint.dto';

export class UpdateSharepointDto extends PartialType(CreateSharepointDto) {}
