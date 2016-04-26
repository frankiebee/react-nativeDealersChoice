'use strict';

var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');
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
      barParams: '',
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
      barParams: event.nativeEvent.text
    })
  }

  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    api.searchBar(this.state.barParams)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'Bar not found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            title: res.name || "Select an Option",
            component: Dashboard,
            passProps: {barInfo: res}
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
        value={this.state.barParams}
        onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderBar.bind(this)}
       renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
       style={styles.listView}/>
      </View>
      );
  }

  renderBar(bar: string, sectionID: number, rowID: number){
    return(
    <View>
      <TouchableHighlight
        style={styles.button}
        onPress={this._handleBarSelection.bind(this,bar)}
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
