import { Module } from '@nestjs/common';
import { PermisosUsersService } from './permisos-users.service';
import { PermisosUsersController } from './permisos-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisosUser } from './entities/permisos-user.entity';
import { RolModule } from 'src/rol/rol.module';

@Module({
  imports: [TypeOrmModule.forFeature([PermisosUser]), RolModule],
  controllers: [PermisosUsersController],
  providers: [PermisosUsersService],
})
export class PermisosUsersModule {}
