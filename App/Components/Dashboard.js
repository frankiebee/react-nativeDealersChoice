
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
      <View style={styles.mainContainer}>
          <TouchableHighlight
          onPress={this._toMenu.bind(this)}
          style={styles.buttonContainer}
          underlayColor="transparent">

          <View>
            <View style={styles.button}>
              <Text style={styles.buttonText} >Menu</Text>
            </View>
             <Text style={styles.treeDicription}>
                Already know what you like and want to browse the menu.
            </Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight
          onPress={this._toDealer.bind(this)}
          style={styles.buttonContainer}
          underlayColor="transparent">
          <View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Dealer's Choice</Text>
            </View>
            <Text style={styles.treeDicription}>
              Not quite sure what you like? Let us help you choose.
            </Text>
          </View>
          </TouchableHighlight>
      </View>
    )
  }

};

module.exports = Dashboard;
