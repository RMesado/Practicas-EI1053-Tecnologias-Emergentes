'use strict';
const mng = require('mongoose');
/**
 * Añadir un blog a la colección
 * Devuelve el ID del nuevo blog
 *
 * body Blog Metadatos del blog
 * returns Result
 **/

const blogSchema = new mng.Schema({
  "@context": String,
        "@type": String,
        "@id": Number,  // Aqui el id de blog
        "headline": String,
        "description": String,
        "genre" : String,
        "author": {
              "@type": String,
              "@id": Number // Aqui el id de autor.
        }
});
var blogModel = mng.model('blog', blogSchema)
 let Blogs = []
exports.createBlog = async function(body) {
  var blog = new blogModel({
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": ,  // Aqui el id de blog
    "headline": "Blog1",
    "description": "p",
    "genre" : body.genre,
    "author": {
          "@type": "Person",
          "@id": "0" // Aqui el id de autor.
    }
  });

  blog.save()

  Blogs.push(body)
  return Blogs[Blogs.length-1]
  
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
 * Buscar un blog de la colección
 * Busqueda mediante palabras clave
 *
 * query String 
 * returns List
 **/
exports.searchBlog = async function(query) {
  query = query.trim().toLowerCase()

  await blogModel.find
  
  // let listaBlogs = 
  return Blogs.filter(blog => blog.name.toLowerCase().includes(query) || 
                              blog.description.toLowerCase().includes(query) /*||
                              blog.category.toLowerCase().includes(query)*/)
  // var indicesBlogs = []
  // listaBlogs.forEach(value => indicesBlogs.push(value.blogId));
  // return indicesBlogs

//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = [ {
//   "name" : "name",
//   "description" : "description",
//   "authorId" : 6,
//   "category" : "category",
//   "blogId" : 0,
//   "tags" : [ "tags", "tags" ]
// }, {
//   "name" : "name",
//   "description" : "description",
//   "authorId" : 6,
//   "category" : "category",
//   "blogId" : 0,
//   "tags" : [ "tags", "tags" ]
// } ];
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
}


/**
 * Buscar un blog de la colección por categoría
 * Busqueda mediante categoría
 *
 * category String 
 * returns List
 **/
exports.searchBlogCategory = async function(category) {
  
  // let listaBlogs = 
  return Blogs.filter(cat => cat.category == category)

  // var indicesBlogs = []
  // listaBlogs.forEach(value => indicesBlogs.push(value.blogId));
  // return indicesBlogs

//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = [ {
//   "name" : "name",
//   "description" : "description",
//   "authorId" : 6,
//   "category" : "category",
//   "blogId" : 0,
//   "tags" : [ "tags", "tags" ]
// }, {
//   "name" : "name",
//   "description" : "description",
//   "authorId" : 6,
//   "category" : "category",
//   "blogId" : 0,
//   "tags" : [ "tags", "tags" ]
// } ];
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
}

