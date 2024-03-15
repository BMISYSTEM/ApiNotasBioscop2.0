import { Test, TestingModule } from '@nestjs/testing';
import { ProjectoService } from './projecto.service';

describe('ProjectoService', () => {
  let service: ProjectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectoService],
    }).compile();

    service = module.get<ProjectoService>(ProjectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
