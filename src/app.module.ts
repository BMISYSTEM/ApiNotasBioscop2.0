import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProjectoModule } from './projecto/projecto.module';
import { OsModule } from './os/os.module';
import { NotaModule } from './nota/nota.module';
import { ApuntamientoModule } from './apuntamiento/apuntamiento.module';
import { SolicitudPermisoModule } from './solicitud-permiso/solicitud-permiso.module';
import { SharepointModule } from './sharepoint/sharepoint.module';
import { IntinerarioModule } from './intinerario/intinerario.module';
import { DocumentacionModule } from './documentacion/documentacion.module';
import { PermisosUsersModule } from './permisos-users/permisos-users.module';
import { AreasModule } from './areas/areas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { PermisosUser } from './permisos-users/entities/permisos-user.entity';
import { RolModule } from './rol/rol.module';
import { Rol } from './rol/entities/rol.entity';
import { Area } from './areas/entities/area.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ClienteModule,
    ProjectoModule,
    OsModule,
    NotaModule,
    ApuntamientoModule,
    SolicitudPermisoModule,
    SharepointModule,
    IntinerarioModule,
    DocumentacionModule,
    PermisosUsersModule,
    AreasModule,
    // Se agrga la conexion a la base de datos
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 60321,
      username: 'postgres',
      password: 'Atenea#99',
      database: 'bioscop',
      // entidades o representacion de la base de datos
      entities: [Area, Rol, PermisosUser, User],
      synchronize: true,
    }),
    RolModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
