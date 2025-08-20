import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { messageController } from './message.controller';

import { validateRequest } from '../../middlewares/validateRequest';
import { MessageValidation } from './messages.validation';
import { uploadFile } from '../../middlewares/fileUploader';

const router = express.Router();

router.post(
  '/send-message/:id',
  auth(ENUM_USER_ROLE.CUSTOMERS, ENUM_USER_ROLE.AGENT, ENUM_USER_ROLE.ADMIN),
  // validateRequest(MessageValidation.messages),
  uploadFile(),
  messageController.sendMessage,
);
router.get(
  '/get-conversation',
  auth(ENUM_USER_ROLE.CUSTOMERS, ENUM_USER_ROLE.AGENT),
  messageController.conversationUser,
);
router.get(
  '/get-message/:id',
  auth(ENUM_USER_ROLE.CUSTOMERS, ENUM_USER_ROLE.AGENT),
  messageController.getMessages,
);

export const MessageRoutes = router;
