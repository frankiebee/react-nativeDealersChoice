
var React = require('react-native');
var styles = require('../Styles/stylessheet');

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
render(){
  return (
      <View style={styles.mainContainer}>
        <TouchableHighlight style={styles.button}>
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
