'use strict';

var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');
// var BarList = require('./Barlist')
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
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      username: '',
      isLoading: false,
      loaded: false,
      bars: null,
      barDetails: '',
      error: false
    }
  }
  componentDidMount() {
    this.loadBarList();
  }

  loadBarList(){
     api.barList()
    .then((responseData) => {

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.businesses, responseData.businesses.id),
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
  _handleBarSelection(bar){
    console.log("this shit is banans !!!!!")
    this.props.navigator.push({
      title: bar.name || "Bar details",
      component: Dashboard,
      passProps: {barDetails: bar}
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
        <ListView
       enableEmptySections={true}
       dataSource={this.state.dataSource}
       renderRow={this.renderBar.bind(this)}
       renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
       style={styles.listView}/>
      </View>
      );
  }
  setBar(bar){
   console.log("me")
   debugger;
 }
  renderBar(bar: string, sectionID: number, rowID: number){
    return(
    <View>
      <TouchableHighlight
        style={styles.button}
        value={bar}
        onPressOut={this._handleBarSelection.bind(this,bar)}
        underlayColor="white">
        <Text style={styles.buttonText} >{bar.name}</Text>
      </TouchableHighlight>
    </View>
    );
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
      return this.pageRender();

  }
};

//export for use

module.exports = Main;
