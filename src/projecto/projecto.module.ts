import { Module } from '@nestjs/common';
import { ProjectoService } from './projecto.service';
import { ProjectoController } from './projecto.controller';

@Module({
  controllers: [ProjectoController],
  providers: [ProjectoService],
})
export class ProjectoModule {}
