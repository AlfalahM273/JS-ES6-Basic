const { CommentPresenter } = require('./comment-presenter');

module.exports.CommentView = class CommentView {

  presenter;
  lisViewComment;

  constructor(  ){
    this.presenter = new CommentPresenter( this );
  }

  init(  ){
    console.log("init CommentView");
    this.lisViewComment = document.getElementById("comment_section");
  }

  getCommentByPostId( postId ){
      this.presenter.getCommentByPostId( postId );
  }

  onLoading(){
    this.lisViewComment.innerHTML = "Loading ...";
  }

  onShowComment( posts ){
    this.lisViewComment.innerHTML = "";
    var text = "";
    posts.forEach(element => {
      text += element.getHTMLListView();
    });
    this.lisViewComment.innerHTML = text;
    
  }
}