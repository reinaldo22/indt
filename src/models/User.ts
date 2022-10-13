import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export type UserRoleType = "admin" | "cliente";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    last_name?:string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["admin", "customer"]
    })
    role: UserRoleType;

    @CreateDateColumn()
    created_At?: Date;
}
