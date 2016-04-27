
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
      <Image
      source={{uri: "http://bit.ly/1NQeycd"}}
      style={styles.mainContainerImg}>
        <View>
          <TouchableHighlight
          style={styles.buttonImg}
          onPress={this._toMenu.bind(this)}
          underlayColor="white">
            <Text style={styles.buttonText} >Menu</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          style={styles.buttonImg}
          onPress={this._toDealer.bind(this)}>
            <Text style={styles.buttonText}>Dealer's Choice</Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }

};

module.exports = Dashboard;
