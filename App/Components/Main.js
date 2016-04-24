'use strict';

var React = require('react-native');

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
//the style sheet
var styles = StyleSheet.create({
  mainContainer: {
    marginTop: 70,
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
    width: 100,
    backgroundColor: 'white',
    borderColor: 'black',
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
    var dataSource =  new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,})
    this.state={
      dataSource: dataSource.cloneWithRows(this.props.name),
      queryBar: '',
      barList: null,

      isLoading: false,
      error: false
    }
  }
   componentDidMount() {
    this.fetchBarList();
  }
  fetchBarList(){
    fetch("http://localhost:3000/", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.businesses),
        isLoaded: true,
      })
    })
    .done();
  }

  handleChange(event){
    this.setState({
      queryBar: event.nativeEvent.text
    });
  }
  handleSubmit(){
    //update ActivityIndicatorIos spinner
    this.setState({
      isLoaded: false
    });
    console.log("Submit", this.state.bar);
    //fetch data from github
    //reroute and pass git hub info
  };

  render(){
    if(!this.state.isLoaded){
      return this.renderLoadingView();
    }
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

        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderBar.bind(this)}
          style={styles.listView}
        />

      </View>
    );
  }
  renderLoadingView() {
    return (
      <View style={styles.mainContainer}>
        <Text>
          Loading Bars...
        </Text>
      </View>
    );
  }
  renderBar(bar){
    return (
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>{bar.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

};
//export for use

module.exports = Main;
