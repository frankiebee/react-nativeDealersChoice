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
     <TouchableHighlight
        onPress={(event) => this.displayDrinkProfile(drink)}
        underlayColor="transparent">
        <Image
          source={{uri: drink.image_url}}
          style={styles.barButtonImg}>
            <View style={styles.barTextView}>
              <Text
                style={styles.barButtonText}
                >
                  {drink.name}
             </Text>
             </View>
          </Image>
      </TouchableHighlight>
      );
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.dealersTitle}>Based off your taste selections we recomend theise drinks for you</Text>
        <ListView
          style={styles.listView}
          dataSource={this.state.drinkDataSource}
          renderRow={(drink) => {
            return this.renderDrinkList(drink)
          }} />
      </View>
    )
  }

}


module.exports = DealersDrink;

