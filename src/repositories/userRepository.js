const User = require('../models/user');

class UserRepository{
    constructor(){

    };

    async findAll(){
        return await User.find();
    }

    async findById(id){
        return await User.findById();
    }

    async save(user){
        return await User.create(user);
    }

    async update(id,user){
        return await User.findByIdAndUpdate(id, user, {new : true});
    }

    async delete(id){
        return await User.findByIdAndRemove(id);
    }
}

module.exports = UserRepository;