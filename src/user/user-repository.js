const { User } = require('./user');

module.exports.UserRepository = class UserRepository {

  constructor(){};
  getAll(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      var users = [];
      if( Array.isArray(json) )
      {
        json.forEach(element => {
          var _user = new User();
          _user.fromJSON( element );
          users.push( _user )
        });
      }
      return users;
    })
  }

}