import { Test, TestingModule } from '@nestjs/testing';
import { ApuntamientoService } from './apuntamiento.service';

describe('ApuntamientoService', () => {
  let service: ApuntamientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApuntamientoService],
    }).compile();

    service = module.get<ApuntamientoService>(ApuntamientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
