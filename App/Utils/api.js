var api = {
  barList(){
    return fetch("http://localhost:3000/", {
      method: "GET",
    }).then((response) => response.json());
  },
  getReviews(user){
     var user = JSON.parse(user);
     return fetch("http://localhost:3000/users/show/" + user.id, {
      method: "GET",
    }).then((response) => response.json());
  },
  loginPage(email, password){
     email = email.toLowerCase().trim();
     return fetch("http://localhost:3000/auth/sign_in?email=" + email + "&password=" + password, {
      method: "POST"
    }).then((response) => response.json());
  },
  register(email, password, confirmPassword){
     email = email.toLowerCase().trim();
     return fetch("http://localhost:3000/auth?email=" + email + "&password=" + password + "&password_confirmation=" + confirmPassword + "&confirm_success_url=localhost:3000", {
      method: "POST", body: JSON.stringify({email: email, password: password})
    }).then((response) => response.json());
  }
};

module.exports = api;

