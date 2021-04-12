'use strict';


/**
 * Añadir un blog a la colección
 * Devuelve el ID del nuevo blog
 *
 * body Blog Metadatos del blog
 * returns Result
 **/
 let Blogs = []
exports.createBlog = async function(body) {

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

