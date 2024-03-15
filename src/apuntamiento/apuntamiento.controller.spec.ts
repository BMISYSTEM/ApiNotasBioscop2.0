import { Test, TestingModule } from '@nestjs/testing';
import { ApuntamientoController } from './apuntamiento.controller';
import { ApuntamientoService } from './apuntamiento.service';

describe('ApuntamientoController', () => {
  let controller: ApuntamientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApuntamientoController],
      providers: [ApuntamientoService],
    }).compile();

    controller = module.get<ApuntamientoController>(ApuntamientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
