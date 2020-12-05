const {Router} = require('express');
const router = Router();
const categoryCtrl = require('../controller/category.controller');


router.get('/',categoryCtrl.getCategories);
router.get('/:id',categoryCtrl.getCategory);
router.post('/',categoryCtrl.createCategory);
router.put('/:id',categoryCtrl.updateCategory);
router.delete('/:id',categoryCtrl.deleteCategory);

module.exports = router;