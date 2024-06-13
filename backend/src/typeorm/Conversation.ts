import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('conversations')
export class Conversation {

    @PrimaryGeneratedColumn()
    id: number;

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

    @Column({ 
        nullable: true,
        name: 'conversation_name' 
    })
    conversationName: string;
}