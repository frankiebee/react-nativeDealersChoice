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
  StyleSheet,
  Image,
} = React;

class DrinkProfile extends React.Component{

  render(){
    return(
      <Image
      source={require('./img/woooooood.jpg')}
      style={styles.mainContainerImg}>
        <Text style={styles.clearBack}>{this.props.curentData.drink.name}</Text>
        <Text style={styles.clearBack}>{this.props.curentData.drink.description}</Text>
        <Text style={styles.clearBack}>{this.props.curentData.reviews[0].description}</Text>
      </Image>
      )
  }

}

module.exports = DrinkProfile;
