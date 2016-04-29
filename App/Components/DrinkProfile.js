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
  constructor(props){
    super(props);
     if(this.props.drink.name === undefined){
      this.state = {
        drink: this.props.drink.drink,
      }
    }
    else{
      this.state = {
        drink: this.props.drink,
      };
    }
  }
  mainRender(){
    return(
      <View style={styles.mainContainer}>
       <Text style={styles.title}>{this.state.drink.name}</Text>
      <Image
          source={{uri: this.state.drink.image_url}}
          style={styles.profileImage}>
      </Image>
        <Text style={styles.dealersTitle}>Drink description:</Text>
       <Text style={styles.drinkDescription}>{this.state.drink.description}</Text>
     </View>);
 }
  render() {
    return this.mainRender();
  }
}

module.exports = DrinkProfile;

