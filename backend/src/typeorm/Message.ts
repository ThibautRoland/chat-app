// src/entities/message.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Conversation } from './Conversation';
import { User } from './User';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Conversation, conversation => conversation.id)
  @JoinColumn({ name: 'conversation_id' })
  conversation: Conversation;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @Column('text')
  content: string;

  @CreateDateColumn({ type: 'timestamp', name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: "updated_at" })
  updatedAt: Date;

  @Column({ default: false, name: 'is_read' })
  isRead: boolean;
}
