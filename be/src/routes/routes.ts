import express from 'express';
import materialRoute from './materialRoute';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Hello World!');
// });

const defaultRoutes = [
    {
      path: '/material',
      route: materialRoute
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router;
  
