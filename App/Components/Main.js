
var React = require('react-native');
var SearchBar = require('react-native-search-bar');
var { //things needed from react to make this work
  ActivityIndicatorIos,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} = React;
//the style sheet
var styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    textAlignVertical: 'center',
    height: 40,
    padding: 4,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
});
//class main with stuff in it
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bar: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      bar: event.nativeEvent.text
    });
  }
  handleSubmit(){
    //update ActivityIndicatorIos spinner
    this.setState({
      isLoading: true
    })
    console.log("Submit", this.state.bar);
    //fetch data from github
    //reroute and pass git hub info
  }
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Bar </Text>
          <TextInput
            style={styles.searchInput}
            value={this.state.bar}
            onChange={this.handleChange.bind(this)}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
      )
  }
};
//export for use

module.exports = Main;
