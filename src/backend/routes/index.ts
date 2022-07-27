const expressRouter = require('express')
const router = expressRouter.Router();

router.get('/', (req:any, res:any) => {
  res.json({
    status: 200,
    path: '/'
  });
});

module.exports = router;