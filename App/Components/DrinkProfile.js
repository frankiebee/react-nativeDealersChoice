var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');

var { //things needed from react to make this work
  AlertIOS,
  ActivityIndicatorIos,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = React;

class DrinkProfile extends React.Component{

  render(){
    return(
      <View style={styles.mainContainer}>
        <Text>{this.props.curentData.drink.name}</Text>
        <Text>{this.props.curentData.drink.description}</Text>
        <Text>{this.props.curentData.reviews[0].description}</Text>
      </View>
      )
  }

}

module.exports = DrinkProfile;