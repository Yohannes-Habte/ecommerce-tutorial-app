import express from 'express';
import footerRoutes from './constants/routes.js';


const router = express.Router();

router.use('/constants', footerRoutes);

export default router;