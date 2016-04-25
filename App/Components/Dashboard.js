
var React = require('react-native');
var styles = require('../Styles/stylessheet');
var DrinkMenu = require('./DrinkMenu');
var Tree = require('./Tree');
var {
  ActivityIndicatorIos,
  ListView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class Dashboard extends React.Component{
  _toMenu(){
    fetch('http://localhost:3000/bars/1/drinks')
    .then((response) => response.json())
    .then(responseData => {
      this.props.navigator.push({
        title: this.props.barDetails.name || "Menu details",
        component: DrinkMenu,
        passProps: {menu: responseData}
      });
    }).done()
  }
   _toDealer(){
      this.props.navigator.push({
        title: this.props.barDetails.name || "Menu details",
        component: Tree
      });
  }
  render(){
    return (
      <View style={styles.mainContainer}>
        <View>
          <TouchableHighlight
          style={styles.button}
          onPress={this._toMenu.bind(this)}
          >
            <Text style={styles.buttonText} >MENU for {this.props.barDetails.name}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          style={styles.button}
          onPress={this._toDealer.bind(this)}>
            <Text style={styles.buttonText}>Dealers Choice</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

};

module.exports = Dashboard;
