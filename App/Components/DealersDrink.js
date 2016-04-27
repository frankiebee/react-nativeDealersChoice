var React = require('react-native');
var DrinkProfile = require('./DrinkProfile');
var Dashboard = require('./Dashboard');
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
  constructor(props) {
    super(props);
    var drinkArray = this.props.dealersChoice.current_drink.length;
    var nextDrink = drinkArray - 1;
    console.log(nextDrink, "THIS IS DRINK ARRAY, AGAIN")
    this.state = {
      isLoading: true,
      nextDrink: nextDrink
    };
  }

  handleDrinkSelection(event) {
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

  handleNextDrink(event) {
    if(drinkArray === 0)
      this.props.navigator.push({
        component: Dashboard,
      })
    else
      this.props.navigator.push({
        component: DealersDrink,
        passProps: {option: this}
      })
    this.setState({
      isLoading: false,
      error: false,
      nextDrink: nextDrink
    })
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

        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNextDrink.bind(this)}>
          <Text>Next drink, please</Text>
        </TouchableHighlight>
      </View>
    )
  }
} // end class DealersDrink


module.exports = DealersDrink;






