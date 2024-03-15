import { Test, TestingModule } from '@nestjs/testing';
import { IntinerarioController } from './intinerario.controller';
import { IntinerarioService } from './intinerario.service';

describe('IntinerarioController', () => {
  let controller: IntinerarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntinerarioController],
      providers: [IntinerarioService],
    }).compile();

    controller = module.get<IntinerarioController>(IntinerarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
