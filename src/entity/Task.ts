import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {

  @PrimaryGeneratedColumn('uuid')
  id: number | undefined;

  @Column({type: 'varchar'})
  title: string | undefined

  @Column({type: 'int'})
  order: number | undefined

  @Column({type: 'varchar'})
  description: string | undefined

  @Column({type: 'varchar'})
  userId: string | undefined

  @Column({type: 'varchar'})
  boardId: string | undefined

  @Column({type: 'varchar'})
  columnId: string | undefined
}