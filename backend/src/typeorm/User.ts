import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    email: string

    @Column({
        nullable: false
    })
    password: string

    @Column({
        nullable: false,
        default: "test"
    })
    username: string

    @Column({
        name: "first_name",
        nullable: false,
        default: 'John'
    })
    firstName: string

    @Column({
        name: "last_name",
        nullable: false,
        default: "Doe"
    })
    lastName: string

    @Column({
        name: "profile_img",
        nullable: true,
        default: 'https://m.media-amazon.com/images/M/MV5BZGZmMjNmOTYtMGRjOS00OWUxLTk3OGItNTgzMzkxYWE0YjFlXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UY281_CR45,0,500,281_.jpg'
    })
    profileImg: string

    @CreateDateColumn({ 
        type: 'timestamp',
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({ 
        type: 'timestamp',
        name: 'updated_at'
    })
    updatedAt: Date;
    
}