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
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json())
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;

