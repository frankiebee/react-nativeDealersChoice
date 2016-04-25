var React = require('react-native');
var Main = require('./App/Components/Main');
var Registration = require('./App/Components/Registration');
var Login = require('./App/Components/login');
var Tree = require('./App/Components/Tree');
var Swiper = require('react-native-swiper')
// es6
// import Swiper from 'react-native-swiper'

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class DealersChoice extends React.Component{
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Dealers Choice',
          component: Tree
        }} />
    );
  }
};

AppRegistry.registerComponent('DealersChoice', () => DealersChoice);
