import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreatePermisosUserDto } from './dto/create-permisos-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PermisosUser } from './entities/permisos-user.entity';
import { Repository } from 'typeorm';
import { RolService } from 'src/rol/rol.service';

@Injectable()
export class PermisosUsersService {
  @Inject(RolService)
  private readonly rol: RolService;

  constructor(
    @InjectRepository(PermisosUser)
    private readonly permisosUser: Repository<PermisosUser>,
  ) {}
  async create(createPermisosUserDto: CreatePermisosUserDto) {
    try {
      const findone = await this.rol.findOne(createPermisosUserDto.rolId);
      console.log(findone);
      if (!findone)
        throw new BadRequestException(
          `El id ${createPermisosUserDto.rolId} del rol no se encuentra `,
        );
      const permiso = await this.permisosUser.save(createPermisosUserDto);
      return permiso;
    } catch (error) {
      if (error.code === '23505')
        throw new BadRequestException(
          `${error.detail} Este rol ya tiene permisos asignados`,
        );
    }
  }

  findAll() {
    return this.permisosUser.find({});
  }

  findOne(id: string) {
    const permisos = this.permisosUser.findOneBy({ id });
    if (permisos) throw new BadRequestException('No se encontro los permisos');
    return permisos;
  }

  // update(id: number, updatePermisosUserDto: UpdatePermisosUserDto) {
  //   return `This action updates a #${id} permisosUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} permisosUser`;
  // }
}
