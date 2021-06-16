module.exports.Comment = class Comment {
    id;
    postId;
    name;
    email;
    body;
  
    constructor() {}
    fromJSON( jsonData ) {
        // console.log( jsonData.name );
        this.id = jsonData.id;
        this.postId = jsonData.postId;
        this.name = jsonData.name;
        this.email = jsonData.email;
        this.body = jsonData.body;
    }

    getHTMLListView(){
        return "" +
        "<table width='100%' style='border-bottom : 1px black, padding : 8px'>" +
            "<tr>" +
                "<td width='80%' style='padding : 8px' >" +
                    "<p>" +
                        "title : " + this.name + " ("+ this.email +") " + "<br>" + "<br>" + "<br>" +
                        "" + this.body + "<br>" +
                    "</p>" +
                "</td>" +
            "</tr>" +
        "</table>"+
        "<hr>";
    }
  
}