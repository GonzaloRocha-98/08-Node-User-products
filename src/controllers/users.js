const express = require('express');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res) => {  //tambien se podría usar (req = Request, res = Response)
    const user = [
      {
        id: 1,
        name: 'Myke',
      },
      {
        id2: 2,
        name: 'Tony', 
      },
    ]
    
    res.json(user);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req, res) => {
  const user   = req.body;
  user.id = 1000;
  const result ={
    message: 'User created',
    user
  };
  res.status(201).json(result);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updateUser = (req, res) => {
  const {id} = req.params;
  const user = req.body;
  user.id = id;
  const result = {
    message: 'User updated',
    user,
  };
  res.json(result);
};


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const updatePartialUser = (req, res) => {
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

const deleteUser = (req, res) => {
  const id = req.params.id;
  //const { id } = req.params;

  const result = {
    message: `User with id: ${id} deleted`
  }

  res.json(result);
};

module.exports = {
    getAllUsers,
    createUser,
    updatePartialUser,
    updateUser,
    deleteUser,
}
 
