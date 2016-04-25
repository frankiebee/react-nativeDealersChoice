// var api = {
//     searchBar(query){
//      return fetch("http://localhost:3000/", {
//       method: "GET",
//     }).then((response) => response.json());
//   }
//     barList(){
//      return fetch("http://localhost:3000/", {
//       method: "GET",
//     }).then((response) => response.json());
//   }
// }
// module.exports = api;
var api = {
  searchBar(query){
     return fetch("http://localhost:3000/", {
      method: "GET",
    }).then((response) => response.json());
  },
    barList(){
     return fetch("http://localhost:3000/", {
      method: "GET",
    }).then((response) => response.json());
  },
  getBio(username){
    var username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json())
  },
  getRepos(username){
    var username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  loginPage(email, password){
     email = email.toLowerCase().trim();
     return fetch("http://localhost:3000/auth/sign_in?email=" + email + "&password=" + password, {
      method: "POST",
    }).then((response) => response.json());
  }

  // loginPage() {
  //   // var username = username.toLowerCase().trim();
  //   // console.log(
  //   //   JSON.stringify({
  //   //     email: "santina_grady@renner.io",
  //   //     password: '123456'
  //   //   })
  //   // );

  //   fetch('http://localhost:3000/auth/sign_in?email=santina_grady@renner.io&password=123456', {  
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //   email: "santina_grady@renner.io",
  //   password: '123456'
  //     })
  //   })
  // }
};

module.exports = api;

