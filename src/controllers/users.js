const express = require('express');
const User = require('../models/user');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = async (req, res, next) => {  //tambien se podría usar (req = Request, res = Response)
  try {
    const user = await User.find();    
      res.json(user);
    
  } catch (error) {
    next(error)
  }
  
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = async (req, res, next) => {
  try {
    let user = req.body;
    user = await User.create(user);
  
    user.id = 86543;
    const result = {
      message: 'User created',
      user
    }
  
    res.status(201).json(result);
    
  } catch (error) {
    next(error)
  }
  
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateUser = async (req, res, next) => {
  try {
    const {id} = req.params;
    let user = req.body;
    user.id = id;
    
    await User.updateOne(user);
  
    const result = {
      message: 'User updated',
      user,
    };  

    res.json(result);
    
  } catch (error) {
    next(error)
  }
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req, res, next) => {
  const user = {
    id: 45,
    name : 'Toto',
  };
  const {id} = req.params;
  if(id == user.id){
    user.name = req.body.name;
  }
  const result = {
    message: 'User updated with patch',
    user
  };
  res.json(result);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    //const { id } = req.params;
    const user = await User.findById(id);
    user.remove();
  
    const result = {
      message: `User with id: ${id} deleted`
    }
    res.json(result);
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
    getAllUsers,
    createUser,
    updatePartialUser,
    updateUser,
    deleteUser,
}
 
