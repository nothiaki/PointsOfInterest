import express from 'express';
import * as controller from '../controller/index';

const router = express.Router();

router.get('/poi', controller.create);

export default router;
