const { Post } = require('./post');

module.exports.PostRepository = class PostRepository {

  constructor(){};

  findByUserId( userId ){
    return fetch('https://jsonplaceholder.typicode.com/users/' + userId + "/posts" )
    .then((response) => response.json())
    .then((json) => {
      var posts = [];
      if( Array.isArray(json) )
      {
        json.forEach(element => {
          var _post = new Post();
          _post.fromJSON( element );
          posts.push( _post )
        });
      }
      return posts;
    })
  }
}