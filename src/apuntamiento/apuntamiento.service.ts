import { Injectable } from '@nestjs/common';
import { CreateApuntamientoDto } from './dto/create-apuntamiento.dto';
import { UpdateApuntamientoDto } from './dto/update-apuntamiento.dto';

@Injectable()
export class ApuntamientoService {
  create(createApuntamientoDto: CreateApuntamientoDto) {
    return 'This action adds a new apuntamiento';
  }

  findAll() {
    return `This action returns all apuntamiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apuntamiento`;
  }

  update(id: number, updateApuntamientoDto: UpdateApuntamientoDto) {
    return `This action updates a #${id} apuntamiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} apuntamiento`;
  }
}
