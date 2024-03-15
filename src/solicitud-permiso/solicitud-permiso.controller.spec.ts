import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudPermisoController } from './solicitud-permiso.controller';
import { SolicitudPermisoService } from './solicitud-permiso.service';

describe('SolicitudPermisoController', () => {
  let controller: SolicitudPermisoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudPermisoController],
      providers: [SolicitudPermisoService],
    }).compile();

    controller = module.get<SolicitudPermisoController>(SolicitudPermisoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
