import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rol: Repository<Rol>,
  ) {}
  create(createRolDto: CreateRolDto) {
    try {
      const rol = this.rol.save(createRolDto);
      return rol;
    } catch (error) {
      throw new BadRequestException('Error inesperado en el servidor');
    }
  }

  findAll() {
    return this.rol.find({
      relations: {
        permisos: true,
      },
    });
  }

  findOne(id: string) {
    const rolOne = this.rol.findOneBy({ id });
    if (!rolOne)
      throw new BadRequestException(`No se encontro el rol con el id ${id}`);
    return rolOne;
  }

  // update(id: number, updateRolDto: UpdateRolDto) {
  //   return `This action updates a #${id} rol`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} rol`;
  // }
}
