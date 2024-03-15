import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.user.save(createUserDto);
      return user;
    } catch (error) {
      throw new BadRequestException(`${error.detail}`);
    }
  }
  findAll() {
    const users = this.user.find({});
    return users;
  }
  findOne(id: string) {
    return this.user.findOneBy({ id });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const usuario = await this.findOne(id);
    try {
      const updateUser = await this.user.update(id, {
        ...usuario,
        ...updateUserDto,
      });
      if (updateUser.affected === 0)
        throw new BadRequestException(
          'No se modificaron los registros de la base de datos',
        );
      return 'Se actualizo con exito';
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }
  async remove(id: string) {
    const removeUser = await this.user.delete(id);
    if (removeUser.affected === 0)
      throw new BadRequestException('No se elimino ningun usuario');
    return 'Se elimino correctamente';
  }
}
