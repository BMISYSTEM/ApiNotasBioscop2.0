import { Module } from '@nestjs/common';
import { IntinerarioService } from './intinerario.service';
import { IntinerarioController } from './intinerario.controller';

@Module({
  controllers: [IntinerarioController],
  providers: [IntinerarioService],
})
export class IntinerarioModule {}
