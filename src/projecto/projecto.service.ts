import { Injectable } from '@nestjs/common';
import { CreateProjectoDto } from './dto/create-projecto.dto';
import { UpdateProjectoDto } from './dto/update-projecto.dto';

@Injectable()
export class ProjectoService {
  create(createProjectoDto: CreateProjectoDto) {
    return 'This action adds a new projecto';
  }

  findAll() {
    return `This action returns all projecto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projecto`;
  }

  update(id: number, updateProjectoDto: UpdateProjectoDto) {
    return `This action updates a #${id} projecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} projecto`;
  }
}
