const UserRepository = require('../repositories/userRepository');
const repository = new UserRepository();


const findAll = async() =>{
    return repository.findAll()
}

const findById = async(id) => {
 return repository.findById(id);   
};

const save = async(user) => {
    return repository.save(user)
}

const update = async(id, user) =>{
    return repository.update(id, user);
}

const deleteById = async(id) =>{
    return repository.delete(id)
}

module.exports = {
    findAll,
    findById,
    save,
    update,
    deleteById
}
