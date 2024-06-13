import { Conversation } from './Conversation';
import { ConversationParticipant } from './ConversationParticipant';
import { User } from './User';
import { Message } from './Message';

const entities = [User, Conversation, Message, ConversationParticipant];

export { User }
export { Conversation }
export { Message }
export { ConversationParticipant }

export default entities;