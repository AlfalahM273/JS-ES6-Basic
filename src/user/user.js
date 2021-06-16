module.exports.User = class User {
    id;
    name;
    username;
    email;
    password;
    address;
    phone;
    website;
    company;
  
    constructor() {}
    fromJSON( jsonData ) {
        // console.log( jsonData.name );
        this.id = jsonData.id;
        this.name = jsonData.name;
        this.username = jsonData.username;
        this.email = jsonData.email;
        this.password= jsonData.password;
        this.address= jsonData.address;
        this.phone= jsonData.phone;
        this.website= jsonData.website;
        this.company= jsonData.company;
    }

    getHTMLListView(){
        return "" +
        "<table width='100%' style='border-bottom : 1px black, padding : 8px'>" +
            "<tr style='padding : 8px' >" +
                "<td width='80%' style='padding : 8px' >" +
                    "<p>" +
                        "Name : " + this.name + "<br>" +
                        "Username : " + this.username + "<br>" +
                        "Address : " + this.address.suite + ", " + this.address.street + ", "+ this.address.city + "<br>" +
                    "</p>" +
                "</td>" +
                "<td width='20%' >" +
                    "<button class='find_post' value='"+ this.id +"' onclick='App.getPostByUserId("+ this.id +")' > See Posts </button>" +
                "</td>" +
            "</tr>" +
        "</table>"+
        "<hr>";
    }
  
}