var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');

var {
  ActivityIndicatorIos,
  Image,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = React;

class DrinkProfile extends React.Component{
  render() {
    return(
      <View>
        <Text style={styles.test}>{this.props.drink.name}</Text>
        <Text style={styles.test}>{this.props.drink.description}</Text>
      </View>
    )
  }
}

module.exports = DrinkProfile;

