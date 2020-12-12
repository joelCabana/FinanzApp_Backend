const {Router} = require('express');
const router = Router();

const userCtrl = require('../controller/user.controller');

const autCtrl = require('../controller/auth.controller');

router.get('/',autCtrl.verifyToken,userCtrl.getUsers);
router.post('/login',userCtrl.loginUser);
router.get('/:id',autCtrl.verifyToken,userCtrl.getUser);
router.put('/:id',autCtrl.verifyToken,userCtrl.updateUser);
router.delete('/:id',autCtrl.verifyToken,userCtrl.deleteUser);
router.post('/',userCtrl.createUser);



module.exports = router;