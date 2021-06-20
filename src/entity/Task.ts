import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {

  @PrimaryGeneratedColumn('uuid')
  id: number | undefined;

  @Column({type: 'varchar'})
  title: string | undefined
}