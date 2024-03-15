import { Area } from 'src/areas/entities/area.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nombre: string;
  @Column()
  apellido: string;
  @Column()
  foto: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  fecha_ingreso: Date;
  @Column()
  activo: boolean;
  // columna de relacion con Rol
  @Column({ nullable: false })
  rolId: string;
  // columna de relacion con Area
  @Column({ nullable: false })
  areaId: string;
  // Foreing key con rol
  @ManyToOne(() => Rol, (rol) => rol.user)
  rol: Rol;
  // Foreing key con area
  @ManyToOne(() => Area, (area) => area.user)
  area: Area;
}
