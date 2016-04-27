'use strict';
var React = require('react-native');
var api = require('../Utils/api');
var styles = require('../Styles/stylessheet');
var Dashboard = require('./Dashboard');
var Login = require('./login')

var { //things needed from react to make this work
  ActivityIndicatorIOS,
  ListView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
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
  if(false){
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
  }

  _handleBarSelection(bar){
<<<<<<< HEAD
    console.log("You are in Bar details")
=======
>>>>>>> 910538e72561d4120bfbdb1d01ae8c2176aba63e
    this.props.navigator.push({
      rightButtonTitle: 'log-in',
      title: bar.name || "Bar details",
      component: Dashboard,
      passProps: {barDetails: bar}
    });
  }

  renderLoadingView() {
    return (
    <View
      style={styles.loadingContainer}>
        <ActivityIndicatorIOS
          animating={true}
          color={'#fff'}
          size={'small'}
          style={{margin: 15}} />
    </View>
    );
  }

  pageRender(){
    return(
      <View
      style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder={"Search for a Bar near you"}
            style={styles.searchInput}
            value={this.state.barParams}
            onChange={this.handleChange.bind(this)} />
            <TouchableHighlight
              style={styles.searchButton}
              onPress={this.handleSubmit.bind(this)}
              >
              <Text style={styles.searchbuttonText}> Search </Text>
            </TouchableHighlight>
          </View>
        <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderBar.bind(this)}
       style={styles.listView}/>
      </View>
      );
  }

  renderBar(bar: string, sectionID: number, rowID: number){
    return(
      <TouchableHighlight
        onPress={this._handleBarSelection.bind(this,bar)}
        underlayColor="transparent">
        <Image
          source={{uri: bar.image_url.replace('ms.jpg','l.jpg')}}
          style={styles.barButtonImg}>
            <View style={styles.barTextView}>
              <Text
                style={styles.barButtonText}
                >
                  {bar.name}
             </Text>
             </View>
          </Image>
      </TouchableHighlight>
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
