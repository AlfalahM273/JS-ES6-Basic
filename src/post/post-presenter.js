const { PostRepository } = require('./post-repository');

module.exports.PostPresenter = class PostPresenter {
  view;
  repository;
  constructor( _view ){
    this.view = _view;
    this.repository = new PostRepository();
  }

  getPostByUserId( userId ){
    this.view.onLoading();
    this.repository.findByUserId( userId ).then( (res)=>{
      this.view.onShowPost( res );
    } );
  }
}