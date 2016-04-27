var React = require('react-native');
var DealersDrink = require('./DealersDrink')
<<<<<<< HEAD
var stylesMain = require('../Styles/stylessheet')

=======
var styles = require('../Styles/stylessheet')
>>>>>>> 910538e72561d4120bfbdb1d01ae8c2176aba63e
var {
  ActivityIndicatorIOS,
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} = React;



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
      console.log("fetch the JSON current_drink", jsonData)
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
          that.props.navigator.replace({
           title: jsonData.current_drink.name,
           component: DealersDrink,
           passProps: {dealersChoice: jsonData, theEnd: that.state.isTheEnd}
         })
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
  componentWillMount(){
    console.log("Component Will mount?")
  }
  componentDidMount() {
    console.log("This is when i mount...")
    if(this.props.option === undefined){
       this.fetchTreeJSON(0,this);
    }
  }

  renderResults() {
    return (
      <Image
      source={{uri: "http://bit.ly/1NQeycd"}}
      style={styles.mainContainerImg}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderOptions.bind(this)}>
        </ListView>
      </Image>
    )
  }
renderOptions(option) {
    return (
      <View>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPressIn={this.handleSelection.bind(this,option)}
            underlayColor="white">
            <Text style={styles.buttonText}>{option.name}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.clearBack}>{option.description}</Text>
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

