import { Test, TestingModule } from '@nestjs/testing';
import { ProjectoController } from './projecto.controller';
import { ProjectoService } from './projecto.service';

describe('ProjectoController', () => {
  let controller: ProjectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectoController],
      providers: [ProjectoService],
    }).compile();

    controller = module.get<ProjectoController>(ProjectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
