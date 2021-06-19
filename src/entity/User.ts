import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number | undefined;

    @Column({type: 'varchar'})
    name: string | undefined;

    @Column({type: 'varchar'})
    login: string | undefined;

    @Column({type: 'varchar'})
    password: string | undefined;

}