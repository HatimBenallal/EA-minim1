import settingsController from '../controller/settingsController';
import { Router } from 'express';

const router = Router();

router.post('/create', settingsController.create);
router.get('/',settingsController.getAll);
router.get('/:id/',settingsController.getSetting);
router.put('/:id/update',settingsController.update);
router.delete('/:id/delete',settingsController.deleteOne);

export default router;