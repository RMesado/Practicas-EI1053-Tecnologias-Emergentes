'use strict';

var utils = require('../utils/writer.js');
var Blog = require('../service/BlogService');

module.exports.createBlog = function createBlog (req, res, next) {
  var body = req.swagger.params['body'].value;
  Blog.createBlog(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchBlog = function searchBlog (req, res, next) {
  var query = req.swagger.params['query'].value;
  Blog.searchBlog(query)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchBlogCategory = function searchBlogCategory (req, res, next) {
  var category = req.swagger.params['category'].value;
  Blog.searchBlogCategory(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
