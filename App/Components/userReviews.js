"use strict"
import React, { Text, View, ViewContainer, ListView, TouchableOpacity } from 'react-native'
var styles = require('../Styles/stylessheet')
var api = require('../Utils/api');

class userReviews extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	user: null,
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
  	api.getReviews()
	    .then((res) => {
	      console.log("response is", res)
	      this.setState({
          user: res,
          dataSource: this.state.dataSource.cloneWithRows(res.reviews, res.reviews.id),
          loaded: true,
        });
	    })
	    .catch((res) => {
	      console.log("error is", res)
	    }).done();
  }

  render(){
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return(
     <View style={styles.mainContainer}>
      
    	  <View>
    	  	<Text>{this.state.user.name}</Text>
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






