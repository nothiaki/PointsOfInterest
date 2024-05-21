import express from 'express';
import * as controller from '../controller/index';

const router = express.Router();

router.get('/', controller.getMany);
router.post('/', controller.create);

export default router;
