import { Router } from 'express';
import { miscRouter } from './MiscRouter';
import { clientRouter } from './ClientRouter';
import { conversationRouter } from './ConversationRouter';
import { messageRouter } from './MessageRouter';

export const routes = Router();

routes.use('/', miscRouter);
routes.use('/clients', clientRouter);
routes.use('/clients', conversationRouter);
routes.use('/clients', messageRouter);
