var React = require('react-native');
var Main = require('./App/Components/Main');
var Registration = require('./App/Components/Registration');

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
          component: Registration
        }} />
    );
  }
};

AppRegistry.registerComponent('DealersChoice', () => DealersChoice);
