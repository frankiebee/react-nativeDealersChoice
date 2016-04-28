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
      <Image
          source={{uri: this.state.drink.image_url}}
          style={styles.barButtonImg}>
      </Image>
       <Text style={styles.treeText}>{this.state.drink.name}</Text>
       <Text style={styles.treeDicription}>{this.state.drink.description}</Text>
     </View>);
 }
  render() {
    return this.mainRender();
  }
}

module.exports = DrinkProfile;

