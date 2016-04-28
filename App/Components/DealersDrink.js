var api = require('../Utils/api');
var React = require('react-native');
var DrinkProfile = require('./DrinkProfile');
var Dashboard = require('./Dashboard');
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

class DealersDrink extends React.Component{
  constructor(props) {
    super(props);
    var choices = this.props.dealersChoice.current_drink;
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    })
    this.state = {
      isLoading: true,
      drinkDataSource: ds.cloneWithRows(choices)
    }
  }

  displayDrinkProfile(drink) {
    console.log(drink, "THIS IS choice IN displayDrinkProfile")
    this.props.navigator.push({
      component: DrinkProfile,
      passProps: {drink: drink}
    });
    this.setState({
      isLoading: false,
      error: false
    });
  }

  renderDrinkList(drink) {
    console.log(drink, "THIS IS DRINK IN DEALERSDRINK")
    return(
      <View style={styles.mainContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={(event) => this.displayDrinkProfile(drink)}>
          <Text>{drink.name}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.drinkDataSource}
          renderRow={(drink) => {
            return this.renderDrinkList(drink)
          }} />
      </View>
    )
  }

}


module.exports = DealersDrink;

