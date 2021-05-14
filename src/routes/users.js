const {Router} = require('express');
const {
    getAllUsers, 
    createUser, 
    updateUser, 
    getUser, 
    deleteUser
    } = require('../controllers/users');
const router = Router();
const {postRequestValidations, putRequestValidations} = require('../middlewares/users/index');

router.get('/', getAllUsers);
router.post('/', postRequestValidations, createUser);
router.put('/:id', putRequestValidations, updateUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

module.exports = router;