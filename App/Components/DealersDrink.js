var React = require('react-native');
var DrinkProfile = require('./DrinkProfile')
var Dashboard = require('./Dashboard')
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

class DealersDrink extends React.Component{
  render(){
    return(
      <View style={styles.mainContainer}>

        <View><Text>{this.props.dealersChoice.current_drink.name}</Text></View>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleDrinkSelection.bind(this, current_drink)}>
            <Text>Into It</Text>
            // renders to DrinkProfile
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleNextDrinkSelection.bind(this, current_drink)}>
            <Text>No Thanks</Text>
            // renders next drink in array
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  handleDrinkSelection(drink) {
    console.log("You are in the drink selection")
    this.props.navigator.push({
      title: drink.name,
      component: Tree,
      passProps: {option: drink}
    });
    this.setState({
      isLoading: false,
      error: false
    })
  }

  handleNextDrinkSelection(handleNextDrinkSelection) {
    console.log("User does not want a drink, send to main!")
    this.props.navigator.push({
      title: nextDrink.name,
      component: Tree,
      passProps: {option: nextDrink}
    })
    this.setState({
      isLoading: false,
      error: false
    })
  }

// end DealersDrink class
}

module.exports = DealersDrink;
