const express = require('express');
const UserServices = require('../services/userServices')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = async (req, res, next) => {  //tambien se podría usar (req = Request, res = Response)
  try {
    const user = await UserServices.findAll();    
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
    user = await UserServices.save(user);
  
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
    
    await UserServices.update(user);
  
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

const getUser = (req, res, next) => {
  try {
    let {id} = req.params;
    const result = {
      user: UserServices.findById(id)
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

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    //const { id } = req.params;
    const user = await UserServices.findById(id);
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
    getUser,
    updateUser,
    deleteUser,
}
 
