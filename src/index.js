const { UserView }  = require('./user/user-view');
const { PostView }  = require('./post/post-view');
const { CommentView }  = require('./comment/comment-view.js');

let userView = new UserView();
let postView = new PostView();
let commentView = new CommentView();

module.exports = {
    init(){
        userView.init();
        postView.init();
        commentView.init();
    },
    getPostByUserId( userId ){
        postView.getPostByUserId( userId );
    },
    getCommentByPostId( postId ){
        console.log(postId);
        commentView.getCommentByPostId( postId );
    }
}