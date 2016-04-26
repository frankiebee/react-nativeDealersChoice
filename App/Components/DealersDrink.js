var React = require('react-native');
var DrinkProfile = require('./DrinkProfile')
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
  componentDidMount(){
  }
  render(){
    return(
      <View style={styles.mainContainer}>

        <View><Text>{this.props.dealersChoice.current_drink[0].name}</Text></View>
        <View>
          <TouchableHighlight>
            <Text>Into It</Text>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight>
            <Text>No Thanks</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
  }
}

module.exports = DealersDrink;
