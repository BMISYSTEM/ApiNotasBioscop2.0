import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PermisosUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  home: boolean;
  @Column()
  project: boolean;
  @Column()
  os: boolean;
  @Column()
  intinerario: boolean;
  @Column()
  permisos: boolean;
  @Column()
  sharepoint: boolean;
  @Column()
  documentacion: boolean;
  @Column({ nullable: false, unique: true })
  rolId: string;
  // /**agregar el foreing key del rol de uno a muchos */
  @ManyToOne(() => Rol, (rol) => rol.permisos, { cascade: true })
  rol: Rol;
}
