import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Board {

  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column({type: 'varchar'})
  title: string | undefined;

  @Column({ type: 'json', array: false })
  columns: Array<{ title: string; order: number; }> | undefined;

}
