import { Test, TestingModule } from '@nestjs/testing';
import { IntinerarioService } from './intinerario.service';

describe('IntinerarioService', () => {
  let service: IntinerarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntinerarioService],
    }).compile();

    service = module.get<IntinerarioService>(IntinerarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
