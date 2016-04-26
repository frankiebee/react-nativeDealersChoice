var React = require('react-native');
var DealersDrink = require('./DealersDrink')
var stylesMain = require('../Styles/stylessheet')
var {
  ActivityIndicatorIOS,
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#48BBEC'
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#C0C0C0'
  },
  text: {
    color: '#C0C0C0',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

// const NUM_BRANCHES = 5;
class Tree extends React.Component{
  render() {

    if(this.state.isLoading) {
      return this.renderLoadingMessage();
    }
    else{
        return this.renderResults();
      }
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isTheEnd: false,
      treeJSON: [],
      tagSelector: '',
      isLoading: true
    };
  }

  fetchTreeJSON(tag,that) {
    var url = `http://localhost:3000/tags?id=${tag}`;
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {

        var isend = false

        if(jsonData.current_drink !== undefined){isend = true; }

          this.props.isEnd = isend
              this.setState({
            isTheEnd: isend,
            upComing: jsonData,
            dataSource: this.state.dataSource.cloneWithRows(jsonData, jsonData.id),
            isLoading: false
    })

      if(isend){
        console.log("We should be moving on now")
            that.props.navigator.push({
           title: jsonData.current_drink.name,
           component: DealersDrink,
           passProps: {dealersChoice: jsonData, theEnd: that.state.isTheEnd}
         })
       }
       else{
      that.props.navigator.push({
        title: responseData.name,
        component: Tree,
        passProps: {option: responseData, theEnd: this.state.isTheEnd}
      });
    }

      })
      .catch( error => console.log('fetch error ' + error) ).done();

  }

  handleSelection(option) {
    console.log("this is when you choose")

    this.fetchTreeJSON(option.id, this)
    this.setState({
      isLoading: false,
      error: false,
    })
  }

  componentDidMount() {
    console.log("This is when i mount...")
    if(this.props.isEnd){
      this.props.navigator.push({
       title: option.current_drink.name,
       component: DealersDrink,
       passProps: {dealersChoice: option, theEnd: this.state.isTheEnd}
     });
    }
    if(this.props.option === undefined){
       this.fetchTreeJSON(0,this);
    }

  }

  renderResults() {
    return (
      <View style={stylesMain.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderOptions.bind(this)}>
        </ListView>
      </View>
    )
  }
renderOptions(option) {
    return (
      <View>
        <View>
          <TouchableHighlight
            style={stylesMain.button}
            onPressIn={this.handleSelection.bind(this,option)}
            underlayColor="white">
            <Text style={stylesMain.buttonText}>{option.name}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>{option.description}</Text>
        </View>
      </View>
    )
  }

  renderLoadingMessage(){
    return (
      <View style={styles.loadingContainer} >
        <ActivityIndicatorIOS
          animating={true}
          color={'#fff'}
          size={'small'}
          style={{margin: 15}} />
          <Text style={{color: '#fff'}}>Connecting...</Text>
      </View>
    );
  }
};

module.exports = Tree;

