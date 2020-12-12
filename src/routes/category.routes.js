const {Router} = require('express');
const router = Router();
const categoryCtrl = require('../controller/category.controller');

const autCtrl = require('../controller/auth.controller');

router.get('/',autCtrl.verifyToken,categoryCtrl.getCategories);
router.get('/:id',autCtrl.verifyToken,categoryCtrl.getCategory);
router.post('/',autCtrl.verifyToken,categoryCtrl.createCategory);
router.put('/:id',autCtrl.verifyToken,categoryCtrl.updateCategory);
router.delete('/:id',autCtrl.verifyToken,categoryCtrl.deleteCategory);

module.exports = router;