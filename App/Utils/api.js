var api = {
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
  getReviews(){
     return fetch("http://localhost:3000/users/show/47", {
      method: "GET",
    }).then((response) => response.json());
  },
  loginPage(email, password){
     email = email.toLowerCase().trim();
     return fetch("http://localhost:3000/auth/sign_in?email=" + email + "&password=" + password, {
      method: "POST",
    }).then((response) => response.json());
  },
  register(email, password, confirmPassword){
     email = email.toLowerCase().trim();
     return fetch("http://localhost:3000/auth?email=" + email + "&password=" + password + "&password_confirmation=" + confirmPassword + "&confirm_success_url=localhost:3000", {
      method: "POST",
    }).then((response) => response.json());
  }
};

module.exports = api;

