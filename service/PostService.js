'use strict';
const mng = require('mongoose');


/**
 * Añadir un post a un blog
 * Se devuelve el ID del nuevo post.
 *
 * blogId Long ID del blog
 * body Post Datos del Post
 * returns Result
 **/
const postSchema = new mng.Schema({
  "@context": String,
  "@type": String,
  "@id": String,
  "identifier": Number, // Aqui el id de post
  "text": String,
  "blogId": {
    "@type": String,
    "@id": String,
    "identifier": Number
  },
  "author": {
    "@type": String,
    "@id": String,
    "identifier": Number // Aqui el id de autor.
  }
});
var postModel = mng.model('post', postSchema)
let Posts = []

exports.createPost = async function (blogId, body) {
  if (blogId == body.blogId) {
    var post = new postModel({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": body.postId,
      "identifier": body.postId, // Aqui el id de post
      "text": body.text,
      "blogId": {
        "@type": "Blog",
        "@id": body.blogId,
        "identifier": body.blogId
      },
      "author": {
        "@type": "Person",
        "@id": body.authorId,
        "identifier": body.authorId, // Aqui el id de autor.
      }
    })
    post.save()
    Posts.push(post)
    return { "identifier": Posts[Posts.length - 1].identifier }
  } else
    return { "identifier": -1 }

  //   return new Promise(function(resolve, reject) {
  //     var examples = {};
  //     examples['application/json'] = {
  //   "id" : 0
  // };
  //     if (Object.keys(examples).length > 0) {
  //       resolve(examples[Object.keys(examples)[0]]);
  //     } else {
  //       resolve();
  //     }
  //   });
}


/**
 * Obtener posts de un blog
 * Devuelve la lista de posts de un blog
 *
 * blogId Long ID del blog
 * returns List
 **/
exports.getPosts = async function (blogId) {
  let task = await postModel.find({})
  //   if(err){
  //     console.log("Printeando error: ", err)
  //   }
  if (Posts.length > 0) {
    let lista = task.slice(Posts.length-1)
    Posts.concat(lista)
  } else {
    Posts = task
    return task
  }
  // Posts.pop()
  //   }})
  // }else{
  //   Posts = task
  //   return task
  // }
  // console.log(Posts)
  // console.log("lista de posts: ", Posts)
  return Posts

  // return Posts.filter(post => post.blogId.identifier == blogId)


  //   return new Promise(function(resolve, reject) {
  //     var examples = {};
  //     examples['application/json'] = [ {
  //   "postId" : 0,
  //   "text" : "text",
  //   "authorId" : 1,
  //   "blogId" : 6
  // }, {
  //   "postId" : 0,
  //   "text" : "text",
  //   "authorId" : 1,
  //   "blogId" : 6
  // } ];
  //     if (Object.keys(examples).length > 0) {
  //       resolve(examples[Object.keys(examples)[0]]);
  //     } else {
  //       resolve();
  //     }
  //   });
}

