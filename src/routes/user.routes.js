const {Router} = require('express');
const router = Router();

const userCtrl = require('../controller/user.controller');

router.get('/',userCtrl.getUsers);
router.get('/:id',userCtrl.getUser);
router.put('/:id',userCtrl.updateUser);
router.delete('/:id',userCtrl.deleteUser);
router.post('/',userCtrl.createUser);


module.exports = router;