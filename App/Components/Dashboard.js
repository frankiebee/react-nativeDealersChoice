
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
      <View
      style={styles.mainContainer}>
          <TouchableHighlight
          style={styles.mainContainer}
          onPress={this._toMenu.bind(this)}
          underlayColor="transparent">
            <View style={styles.button}>
              <View style={styles.barTextView}>

              <Text style={styles.buttonText} >Menu</Text>
              </View>
            </View>

          </TouchableHighlight>
        <View>
          <TouchableHighlight
          style={styles.buttonImg}
          onPress={this._toDealer.bind(this)}>
            <Text style={styles.buttonText}>Dealers Choice</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

};

module.exports = Dashboard;
