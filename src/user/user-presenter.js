const { UserRepository } = require('./user-repository');

module.exports.UserPresenter = class UserPresenter {
  view;
  repository;
  constructor( _view ){
    this.view = _view;
    this.repository = new UserRepository();
  }

  getUser(){
    this.view.onLoading();
    this.repository.getAll().then( (res)=>{
      this.view.onShowUser( res );
    } );
  }
}