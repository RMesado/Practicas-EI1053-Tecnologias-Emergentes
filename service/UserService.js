'use strict';

const { lastIndex } = require("methods");

// const { userInfo } = require("node:os");


/**
 * Crea un usuario
 * This can only be done by the logged in user.
 *
 * body User Crear un usuario
 * no response value expected for this operation
 **/

let Users = [{
  "@context": "https://schema.org",
  "@type": ["Person", "DeliveryEvent"],
  "@id": "",
  "identifier": 0,
  "accesCode": "supersecreto",
  "email": "berejena@coco.com",
  "name": "anacleto"
}]

exports.createUser = async function (body) {
  if (Users.includes(body.userId) || Users.includes(body.username) ||
    Users.includes(body.email)) {
    return "Id, username o email repetidos";

    // return new Promise(function(resolve, reject) {
    //   resolve();
    // });
  }
  Users.push(body)
  return Users[Users.length - 1]
}


/**
 * Consulta un usuario
 * Obtener datos de un usuario
 *
 * userId Long ID del usuario
 * returns User
 **/

exports.getUserData = async function (userId) {
  var indice = Users.findIndex(obj => obj.identifier == userId);
  return Users[indice]
  //   return new Promise(function(resolve, reject) {
  //     var examples = {};
  //     examples['application/json'] = {
  //   "userId" : 0,
  //   "password" : "supersecreto",
  //   "email" : "berejena@coco.com",
  //   "username" : "anacleto"
  // };
  //     if (Object.keys(examples).length > 0) {
  //       resolve(examples[Object.keys(examples)[0]]);
  //     } else {
  //       resolve();
  //     }
  //   });
}


/**
 * Login
 * Need credentials in body
 *
 * body Credentials Credenciales
 * returns String
 **/
exports.loginUser = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}