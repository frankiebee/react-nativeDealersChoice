var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');

var { //things needed from react to make this work
  AlertIOS,
  ActivityIndicatorIos,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = React;

class DrinkProfile extends React.Component{
  constructor(props) {
    super(props);
    console.log(this, "YOU ARE IN DRINK PROFILE")
    console.log(this.props.option.props.dealersChoice.current_drink[0].name, "THIS IS THE DRINK NAME")
    this.state = {
      isLoading: true,
    };
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <Text>{this.props.option.props.dealersChoice.current_drink[0].name}
        </Text>
        <Text>{this.props.option.props.dealersChoice.current_drink[0].description}
        </Text>
      </View>

    )
  }

}

module.exports = DrinkProfile;
