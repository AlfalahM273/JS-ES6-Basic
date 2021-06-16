const { CommentRepository } = require('./comment-repository');

module.exports.CommentPresenter = class CommentPresenter {
  view;
  repository;
  constructor( _view ){
    this.view = _view;
    this.repository = new CommentRepository();
  }

  getCommentByPostId( postId ){
    this.view.onLoading();
    this.repository.findByPostId( postId ).then( (res)=>{
      this.view.onShowComment( res );
    } );
  }
}