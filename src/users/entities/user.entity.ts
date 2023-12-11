import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user"})
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email= email;
        this.password = password;
    }
}

