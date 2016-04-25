"use strict";

var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');
var DrinkProfile = require('./DrinkProfile')

var { //things needed from react to make this work
  AlertIOS,
  ActivityIndicatorIos,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
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
      console.log("this shit is banans !!!!!")
        this.props.navigator.push({
          title: drink.name || "drink details",
          component: DrinkProfile,
          passProps: {curentData: responseData}
      });
  }).done();
  }
  renderLoadingView() {
    return (
      <View style={styles.mainContainer}>
        <Text>
          Loading...
        </Text>
      </View>
    );
  }
  render(){
    if(!this.state.loaded){
      this.renderLoadingView();
    }
      return(
      <View style={styles.mainContainer}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMenu.bind(this)}/>
      </View>
      );
  }
  renderMenu(drink){
    return(
    <View>
      <TouchableHighlight
        style={styles.button}
        value={drink}
        onPress={this._handleDrinkSelection.bind(this, drink)}
        underlayColor={"white"}>
        <Text style={styles.buttonText} >{drink.name}</Text>
      </TouchableHighlight>
      <Text>{drink.description}</Text>
    </View>
      );
  }

};

module.exports = DrinkMenu;
