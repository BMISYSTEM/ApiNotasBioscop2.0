import { Module } from '@nestjs/common';
import { ApuntamientoService } from './apuntamiento.service';
import { ApuntamientoController } from './apuntamiento.controller';

@Module({
  controllers: [ApuntamientoController],
  providers: [ApuntamientoService],
})
export class ApuntamientoModule {}
