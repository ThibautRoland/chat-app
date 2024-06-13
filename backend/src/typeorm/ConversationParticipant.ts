// src/entities/conversation-participant.entity.ts
import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Conversation } from './Conversation';
import { User } from './User';

@Entity('conversation_participants')
export class ConversationParticipant {
  @PrimaryColumn('uuid', {
    name: 'conversation_id'
  })
  conversationId: number;

  @PrimaryColumn('uuid', {
    name: 'user_id'
  })
  userId: number;

  @CreateDateColumn({ type: 'timestamp', name: 'joined_at' })
  joinedAt: Date;

  @ManyToOne(() => Conversation, conversation => conversation.id)
  @JoinColumn({ name: 'conversation_id' })
  conversation: Conversation;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
