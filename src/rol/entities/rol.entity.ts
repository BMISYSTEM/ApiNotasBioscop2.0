import { PermisosUser } from 'src/permisos-users/entities/permisos-user.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nombre: string;
  @OneToMany(() => PermisosUser, (permisos) => permisos.rol)
  @JoinColumn()
  permisos: PermisosUser;
  @OneToMany(() => User, (user) => user.rol)
  @JoinColumn()
  user: User;
}
