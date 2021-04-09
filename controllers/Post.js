'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.createPost = function createPost (req, res, next) {
  var blogId = req.swagger.params['blogId'].value;
  var body = req.swagger.params['body'].value;
  Post.createPost(blogId,body)
    .then(function (response) {
      
      /***** EXTENSION PARA EVENTOS CLIENTE ****/
      req.sse.emit('new-post', body) // emit event to clients
      /****************************************/

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPosts = function getPosts (req, res, next) {
  var blogId = req.swagger.params['blogId'].value;
  Post.getPosts(blogId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
