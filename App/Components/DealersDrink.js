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

  displayDrinkProfile(event) {
    console.log(this, "THIS IS THIS IN displayDrinkProfile")
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

  renderDrinkList(drink) {
    console.log(drink, "THIS IS DRINK IN DEALERSDRINK")
    return(
      <View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.displayDrinkProfile.bind(this)}>
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



      // Image wrap is not permitting ListView
        // <Image
        //   source={{uri: "http://bit.ly/1NQeycd"}}
        //   style={styles.mainContainerImg}>
        // </Image>



