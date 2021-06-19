import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Board {

  @PrimaryGeneratedColumn('uuid')
  id: number | undefined;

  @Column({type: 'varchar'})
  title: string | undefined;

  @Column('simple-array')
  columns: object[] | undefined

}
