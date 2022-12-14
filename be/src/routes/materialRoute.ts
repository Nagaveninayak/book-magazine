import express from 'express';
import materialController from '../controller/materialController'; 

const router = express.Router();

router.get('/hello', materialController.hello);
router.post('/csv_upload', materialController.csvUpload);

export default router;