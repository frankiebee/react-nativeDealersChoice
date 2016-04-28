
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
  StyleSheet,
  Image
} = React;

class Dashboard extends React.Component{
  _toMenu(){
    fetch('http://localhost:3000/bars/1/drinks')
    .then((response) => response.json())
    .then(responseData => {
      this.props.navigator.push({
        rightButtonTitle: 'log-in',
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
      <View style={styles.buttonContainer}>
          <TouchableHighlight
          onPress={this._toMenu.bind(this)}
          underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText} >Menu</Text>
            </View>
          </TouchableHighlight>
                        <Text>
              Already have an idea what you want? Checkout the menu
              </Text>
          <TouchableHighlight
          onPress={this._toDealer.bind(this)}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Dealer's Choice</Text>
            </View>
          </TouchableHighlight>
      </View>
    )
  }

};

module.exports = Dashboard;
