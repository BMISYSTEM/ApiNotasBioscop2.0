import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudPermisoService } from './solicitud-permiso.service';

describe('SolicitudPermisoService', () => {
  let service: SolicitudPermisoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudPermisoService],
    }).compile();

    service = module.get<SolicitudPermisoService>(SolicitudPermisoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
