'use strict';

var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');

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
    marginTop: 20,
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Main extends React.Component{
  content(){
    this.state.bars.map(function(item){
        return (
          <View key={item.name} style={ styles.content }>
            <Text>{item.name}</Text>
          </View>
        );}
    )
  }
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      loaded: false,
      bars: null,
      error: false
    }
  }
  componentDidMount() {
    this.loadBarList();
  }

  loadBarList(){
    api.barList()
    .then((response) => {
      // debugger;
      this.setState({
        bars: response.businesses,
        loaded: true,
      });
    })
    .done();
  }
  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }
  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
  }
  renderLoadingView() {
    return (
      <View style={styles.mainContainer}>
        <Text>
          Loading...
        </Text>
      </View>
    );
  }
  pageRender(){
    return(
      <View style={styles.mainContainer}>
      <TextInput
        placeholder={"Search for a Bar near you"}
        style={styles.searchInput}
        value={this.state.username}
        onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <Text>Hello?</Text>
        <Text style={styles.buttonText}>{this.loopBars()}
        </Text>

      </View>
      );
  }
  loopBars(){
    var bars = []
    for(var bar = 0; bar < this.state.bars.length; bar++ ){
      bars.push(this.state.bars[bar].name)
    }
    return bars
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    if(this.state.bars){
      return this.pageRender();
    }
  }
};

//export for use

module.exports = Main;
