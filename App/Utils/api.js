var api = {
  barList(){
    return fetch("http://localhost:3000/", {
      method: "GET",
    }).then((response) => response.json());
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

