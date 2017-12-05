const request = require("request");

function fetchPosts(callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/posts"
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchPost(id, callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/posts/" + id
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchPostByUser(userId, callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/posts", qs: {"userId": userId}
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchUsers(callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/users"
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchUser(userId, callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/users/" + userId
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchComments(callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/comments/"
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function fetchCommentsByPost(postId, callback) {
  request(
    {
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/comments", qs: {"postId": postId}
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function publishPost(userId, title, body, callback) {
  const newPost = {userId: userId, title: title, body: body};
  //console.log(newPost);
  request(
    {
      method: "POST",
      url: "http://jsonplaceholder.typicode.com/posts",
      form: newPost
      // body: JSON.stringify(newPost)
      // body: newPost,
      // json: true
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function publishComment(postId, name, email, body, callback) {
  const newComment = {postId: postId, name: name, email: email, body: body};
  request(
    {
      method: "POST",
      url: "http://jsonplaceholder.typicode.com/comments",
      form: newComment
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function updatePostTitle(postId, newTitle, callback) {
  const newPost = {title: newTitle};
  request(
    {
      method: "PUT",
      url: "http://jsonplaceholder.typicode.com/posts/" + postId,
      form: newPost
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function updatePostBody(postId, newBody, callback) {
  const newPost = {body: newBody};
  request(
    {
      method: "PUT",
      url: "http://jsonplaceholder.typicode.com/posts/" + postId,
      form: newPost
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}

function updatePost(postId, newTitle, newBody, callback) {
  const newPost = {title: newTitle, body: newBody};
  request(
    {
      method: "PUT",
      url: "http://jsonplaceholder.typicode.com/posts/" + postId,
      form: newPost
    }
    ,
    function (error, response, body) {
      callback(body);
    });
}


//
// function output(result) {
//   console.log(result);
// }
//
// publishPost(1, "ahah title", "boddyyy", output);

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
