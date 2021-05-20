const userServices = require('./userServices');
const AppError = require('../errors/appError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/index')


const login = async(email, password, next) => {
    try {
        const user = await userServices.findByEmail(email);

        if(!user){
            throw new AppError('Authentication failed! Email / password incorrect.', 400)
        }

        if(!user.enable){
            throw new AppError('Authentication failed! User disabled.', 400)

        }
        
        const validPass =await bcrypt.compare(password, user.password);

        if(!validPass){
            throw new AppError('Authentication failed! Email / password incorrect. - password', 400)
        }
        
        const token = _encrypt(user.id);

        return {
            token,
            user: user.name,
            role: user.role
        }

    } catch (error) {
        throw error;
    }
}

_encrypt = (id) => {
    return jwt.sign({ id }, config.auth.secret, {expiresIn: config.auth.ttl})
}

module.exports = {
    login
}