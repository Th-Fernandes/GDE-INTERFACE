import {Router} from 'express';

const router = Router();

router.get('/', (req:any, res:any) => {
  res.json({
    status: 200,
    path: '/'
  });
});

export default router;