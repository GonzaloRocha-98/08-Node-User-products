const {Router} = require('express');
const {
    getAllUsers, 
    createUser, 
    updateUser, 
    getUser, 
    deleteUser
    } = require('../controllers/users');
const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.patch('/:id', getUser);
router.delete('/:id', deleteUser);

module.exports = router;