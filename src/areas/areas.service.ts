import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
// import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area)
    private readonly areas: Repository<Area>,
  ) {}

  create(createAreaDto: CreateAreaDto) {
    try {
      const area = this.areas.save(createAreaDto);
      return area;
    } catch (error) {
      throw new BadRequestException('Error inesperado en el servidor');
    }
  }

  findAll() {
    return this.areas.find({});
  }

  // findOne(id: string) {
  //   // return this.areas.findOne(id);
  // }

  // update(id: number, updateAreaDto: UpdateAreaDto) {
  //   return `This action updates a #${id} area`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} area`;
  // }
}
