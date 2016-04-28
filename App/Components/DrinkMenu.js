"use strict";

var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');
var DrinkProfile = require('./DrinkProfile')

var {
  AlertIOS,
  ActivityIndicatorIOS,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
} = React;

class DrinkMenu extends React.Component{
 componentDidMount() {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.menu.drinks, this.props.menu.drinks.id),
        loaded: true,
      });
  }
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      username: '',
      isLoading: false,
      loaded: false,
      bars: null,
      barDetails: '',
      error: false
    }
  }
  _handleDrinkSelection(drink){
    fetch('http://localhost:3000/bars/1/drinks/'+drink.id)
    .then((response) => response.json())
    .then(responseData => {
        this.props.navigator.push({
          title: drink.name || "drink details",
          component: DrinkProfile,
          passProps: {drink: responseData}
      });
  }).done();
  }
  renderLoadingView() {
   return (
    <View
      style={styles.loadingContainer}>
        <ActivityIndicatorIOS
          animating={true}
          color={'#fff'}
          size={'small'}
          style={{margin: 15}} />
    </View>
    );
  }
  render(){
    if(!this.state.loaded){
      this.renderLoadingView();
    }
      return(
      <View
      style={styles.mainContainer}>
        <Text style={styles.title}>Drink Menu</Text>
        <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderMenu.bind(this)}/>
      </View>
      );
  }
  renderMenu(drink){
    return(
     <TouchableHighlight
        onPress={this._handleDrinkSelection.bind(this, drink)}
        underlayColor="transparent">
        <Image
          source={{uri: drink.image_url}}
          style={styles.barButtonImg}>
            <View style={styles.barTextView}>
              <Text
                style={styles.barButtonText}
                >
                  {drink.name}
             </Text>
             </View>
          </Image>
      </TouchableHighlight>
      );
  }

};

module.exports = DrinkMenu;
