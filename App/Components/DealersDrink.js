var React = require('react-native');
var DrinkProfile = require('./DrinkProfile');
var Dashboard = require('./Dashboard');
var styles = require('../Styles/stylessheet');
var Main = require('./Main');

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


class DealersDrink extends React.Component{
  constructor(props) {
    super(props);
    var drinkArray = this.props.dealersChoice.current_drink;
    console.log(drinkArray, "THIS IS DRINK ARRAY, AGAIN")
    this.state = {
      isLoading: true,
      nextDrink: drinkArray
    };
  }

  handleDrinkSelection(event) {
    console.log(this, "THIS IS THIS IN handleDrinkSelection")
    this.props.navigator.push({
      title: this.props.dealersChoice.current_drink.name,
      component: DrinkProfile,
      passProps: {option: this}
    });
    this.setState({
      isLoading: false,
      error: false
    });
  }

  render(){
    console.log(this, "THIS IS THIS IN RENDER")
    return(
      <View style={styles.mainContainer}>
        <View>
          <Text>{this.props.dealersChoice.current_drink.name}</Text>
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleDrinkSelection.bind(this)}>
          <Text>Into It</Text>
        </TouchableHighlight>
      </View>
    )
  }

} // end class DealersDrink


module.exports = DealersDrink;






