const { PostPresenter } = require('./post-presenter');

module.exports.PostView = class PostView {

  presenter;
  buttonGetPost;
  lisViewPost;

  constructor(  ){
    this.presenter = new PostPresenter( this );
  }

  init(  ){
    console.log("init PostView");
    this.lisViewPost = document.getElementById("post_section");
  }

  getPostByUserId( userId ){
      this.presenter.getPostByUserId( userId );
  }

  onLoading(){
    this.lisViewPost.innerHTML = "Loading ...";
  }

  onShowPost( posts ){
    this.lisViewPost.innerHTML = "";
    var text = "";
    posts.forEach(element => {
      text += element.getHTMLListView();
    });
    this.lisViewPost.innerHTML = text;
    
  }

}