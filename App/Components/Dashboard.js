
var React = require('react-native');
var styles = require('../Styles/stylessheet');
var DrinkMenu = require('./DrinkMenu');

var {
  AlertIOS,
  ActivityIndicatorIos,
  ListView,
  View,
  Text,
  TextInput,
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
  render(){
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
        style={styles.button}
        onPress={this._toMenu.bind(this)}
        >
          <Text style={styles.buttonText} >MENU for {this.props.barDetails.name}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Dealers Choice</Text>
        </TouchableHighlight>

      </View>
    )
  }

};

module.exports = Dashboard;
