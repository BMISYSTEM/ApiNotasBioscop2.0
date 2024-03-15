import { Injectable } from '@nestjs/common';
import { CreateIntinerarioDto } from './dto/create-intinerario.dto';
import { UpdateIntinerarioDto } from './dto/update-intinerario.dto';

@Injectable()
export class IntinerarioService {
  create(createIntinerarioDto: CreateIntinerarioDto) {
    return 'This action adds a new intinerario';
  }

  findAll() {
    return `This action returns all intinerario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intinerario`;
  }

  update(id: number, updateIntinerarioDto: UpdateIntinerarioDto) {
    return `This action updates a #${id} intinerario`;
  }

  remove(id: number) {
    return `This action removes a #${id} intinerario`;
  }
}
