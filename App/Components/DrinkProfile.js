var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');

var {
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
  constructor(props) {
    super(props);
    var choices = this.props.option.props.dealersChoice.current_drink;
    var ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    })
    this.state = {
      drinkDataSource: ds.cloneWithRows(choices)
    }
  }

  render() {
    return(

      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.drinkDataSource}
          renderRow={(drink) => {
            return this.renderDrinkList(drink)
          }}/>
      </View>
    )
  }

  renderDrinkList(drink) {
    console.log(drink, "THIS IS DRINK IN PROFILE")
    return(
      <View>
        <View>
          <Text>{drink.name}</Text>
          <Text>{drink.description}</Text>
        </View>

        <Image
        source={{uri: "http://bit.ly/1NQeycd"}}
        style={styles.mainContainerImg}>
          <Text style={styles.clearBack}>{this.props.curentData.drink.name}</Text>
          <Text style={styles.clearBack}>{this.props.curentData.drink.description}</Text>
          <Text style={styles.clearBack}>{this.props.curentData.reviews[0].description}</Text>
        </Image>
      </View>
    )
  }
}

module.exports = DrinkProfile;
