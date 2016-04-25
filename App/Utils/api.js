var api = {
  barList(){
    return fetch("http://localhost:3000/", {
      method: "GET",
    }).then((response) => response.json());
  },
  searchBar(barParams){
    var url = `https://api.yelp.com/v2/search?term=cocktail+bars&location=San+Francisco`;
    return fetch(url).then((res) => res.json())
  },
};

module.exports = api;

