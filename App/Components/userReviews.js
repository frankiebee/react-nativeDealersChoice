"use strict"
import React, { Text, View, ViewContainer, ListView, TouchableOpacity, AsyncStorage } from 'react-native'
var styles = require('../Styles/stylessheet')
var api = require('../Utils/api');

class userReviews extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	user: null,
    	name: "",
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
  	AsyncStorage.getItem("user_data").then((value) => {
	  	api.getReviews(value)
		    .then((res) => {
		      console.log("response is", res.user.name)
		      this.setState({
	          user: res,
	          name: res.user.name,
	          dataSource: this.state.dataSource.cloneWithRows(res.reviews, res.reviews.id, ),
	          loaded: true,
	        });
		    })
		    .catch((res) => {
		      console.log("error is", res)
		    }).done();  		
  	}).done(function() {});
  }

  render(){
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return(
     <View style={styles.mainContainer}>
      
    	  <View
    	  	dataSource={this.state.dataSource}>
    	  	<Text>{this.state.name}</Text>
    	  </View>
      
	      <ListView
	        dataSource={this.state.dataSource}
	        renderRow={this.renderReview.bind(this)} />
      </View>
    )
  }

  renderReview(review){
  	return(
	  	<View>
	  		<Text>{review.description}</Text>
	  	</View>
  	)
  }

  renderLoadingView(){
    return(
      <View style = {styles.mainContainer}>
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

} // end class userReviews

module.exports = userReviews;






