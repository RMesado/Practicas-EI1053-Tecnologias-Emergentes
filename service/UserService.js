"use strict";

const { lastIndex } = require("methods");
const mng = require("mongoose");

// const { userInfo } = require("node:os");

/**
 * Crea un usuario
 * This can only be done by the logged in user.
 *
 * body User Crear un usuario
 * no response value expected for this operation
 **/
const userSchema = new mng.Schema({
  "@context": String,
  "@type": Array,
  "@id": String,
  identifier: Number,
  accessCode: String,
  email: String,
  name: String,
});
var userModel = mng.model("user", userSchema);

let Users = [
  {
    "@context": "https://schema.org",
    "@type": ["Person", "DeliveryEvent"],
    "@id": "0",
    identifier: 0,
    accessCode: "supersecreto",
    email: "berejena@coco.com",
    name: "anacleto",
  },
];

exports.createUser = async function (body) {
  var user = new userModel({
    "@context": "https://schema.org",
    "@type": ["Person", "DeliveryEvent"],
    "@id": body.userId + "",
    identifier: body.userId,
    accessCode: body.password,
    email: body.email,
    name: body.username,
  });

  user.save();
  // Users.push(user)
  return user;
  // Users.push(user)
  // return Users[Users.length - 1]
  // if (Users.includes(body.userId) || Users.includes(body.username) ||
  //   Users.includes(body.email)) {
  //   return "Id, username o email repetidos";

  // return new Promise(function(resolve, reject) {
  //   resolve();
  // });
};

/**
 * Consulta un usuario
 * Obtener datos de un usuario
 *
 * userId Long ID del usuario
 * returns User
 **/

exports.getUserData = async function (userId) {
  var usuario;
  let task = await userModel.find({ identifier: userId })
  // {
  //   if (err) {
  //     console.log(err);
  //   }
    
  if (task.length == 0) {
      usuario = {identifier: -1};
    } else {
      usuario = task[0];
    }

  return usuario;
  //   if (Users.length == 0) {
  //     await userModel.find({}, function (err, task) {
  //       if (err) {
  //         console.log(err)
  //       }
  //       for (var i = 0; i < task.length; i++) {
  //         Users.push({
  //           _id: task[i]._id,
  //           "@context": "https://schema.org",
  //           "@type": ["Person", "DeliveryEvent"],
  //           "@id": task[i].identifier + "",
  //           identifier: task[i].identifier,
  //           name: task[i].name,
  //           email: task[i].email,
  //           accessCode: task[i].accessCode
  //         })
  //       }
  //       return Users[Users.findIndex(obj => obj.identifier == userId)]
  //     })
  //   } else {
  //     var indice = Users.findIndex(obj => obj.identifier == userId);
  //     return Users[indice]
  //   }
  // }
};
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

/**
 * Login
 * Need credentials in body
 *
 * body Credentials Credenciales
 * returns String
 **/
exports.loginUser = async function (body) {
  var usuario;
  let task = await userModel.find(
    { name: body.username, accessCode: body.password }) 
  
    // function (err, task) {
    //   if (err) {
    //     console.log("printeo error: ", err);
    //   }
      if (task.length == 0) {
        console.log("no funca", task);
        usuario = { identifier: -1 };
      } else {
        // console.log("Ha hecho el login bien: ", task[0]);
        usuario = task[0];
      }
      return usuario;
    }
  
  // return new Promise(function (resolve, reject) {
  //   var examples = {};
  //   examples['application/json'] = "";
  //   if (Object.keys(examples).length > 0) {
  //     resolve(examples[Object.keys(examples)[0]]);
  //   } else {
  //     resolve();
  //   }
  // });


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
};
