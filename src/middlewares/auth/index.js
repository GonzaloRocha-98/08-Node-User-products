const {check, validationResult} = require('express-validator');
const {_validationResult} = require('../commons');


const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailType = check('email', 'Email is invalid').isEmail();
const _passwordRequired = check('password', 'Password required').not().isEmpty();

const postLoginRequestValidations = [
    _emailRequired,
    _emailType,
    _passwordRequired,
    _validationResult
]

module.exports = {
    postLoginRequestValidations
}