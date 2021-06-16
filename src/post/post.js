module.exports.Post = class Post {
    id;
    userId;
    title;
    body;
  
    constructor() {}
    fromJSON( jsonData ) {
        // console.log( jsonData.name );
        this.id = jsonData.id;
        this.userId = jsonData.userId;
        this.title = jsonData.title;
        this.body = jsonData.body;
    }

    getHTMLListView(){
        return "" +
        "<table width='100%' style='border-bottom : 1px black, padding : 8px'>" +
            "<tr>" +
                "<td width='80%' style='padding : 8px' >" +
                    "<p>" +
                        "title : " + this.title + "<br>" + "<br>" + "<br>" +
                        "" + this.body + "<br>" +
                    "</p>" +
                "</td>" +
                "<td width='20%' >" +
                    "<button class='find-comment' value='"+ this.id +"' onclick='App.getCommentByPostId("+ this.id +")' > See Comment </button>" +
                "</td>" +
            "</tr>" +
        "</table>"+
        "<hr>";
    }
  
}