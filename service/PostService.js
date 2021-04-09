'use strict';


/**
 * Añadir un post a un blog
 * Se devuelve el ID del nuevo post.
 *
 * blogId Long ID del blog
 * body Post Datos del Post
 * returns Result
 **/
 let Posts = [{}]

exports.createPost = async function(blogId,body) {

  if (blogId == body.blogId){
    Posts.push(body)
    return {"id": Posts[Posts.length-1].id}
 } else
    return {"id": -1}

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
exports.getPosts = async function(blogId) {

  return Posts.filter(post => post.blogId == blogId)


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

