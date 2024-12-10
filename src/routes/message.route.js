const { Router } = require('express');
const messageController = require('../controllers/messanger.controller');

const messageRouter = Router();

messageRouter.get('/', messageController.getMessage);
messageRouter.get('/:roomId', messageController.getAllMessages);
messageRouter.post('/', messageController.create);

module.exports = { messageRouter };
