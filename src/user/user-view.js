const { UserPresenter } = require('./user-presenter');

module.exports.UserView = class UserView {
  presenter;

  buttonGetUser;
  lisViewUser;

  constructor(  ){
    this.presenter = new UserPresenter( this );
  }

  init(  ){
    console.log("init UserView");
    
    this.buttonGetUser = document.getElementById("get_user");
    this.buttonGetUser.onclick = () =>{
      this.presenter.getUser();
    }
    this.lisViewUser = document.getElementById("user_section");
  }

  onLoading(){
    this.lisViewUser.innerHTML = "Loading ...";
  }

  onShowUser( users ){
    this.lisViewUser.innerHTML = "";
    var text = "";
    users.forEach(element => {
      text += element.getHTMLListView();
    });
    this.lisViewUser.innerHTML = text;
  }

}