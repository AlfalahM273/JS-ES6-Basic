const { Comment } = require('./comment');

module.exports.CommentRepository = class CommentRepository {

  constructor(){};

  findByPostId( postId ){
    return fetch('https://jsonplaceholder.typicode.com/posts/' + postId + "/comments" )
    .then((response) => response.json())
    .then((json) => {
      var comments = [];
      if( Array.isArray(json) )
      {
        json.forEach(element => {
          var _comment = new Comment();
          _comment.fromJSON( element );
          comments.push( _comment )
        });
      }
      return comments;
    })
  }
}