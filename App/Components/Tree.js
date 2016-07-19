var React = require('react-native');
var DealersDrink = require('./DealersDrink')
var styles = require('../Styles/stylessheet')

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

      if(isend) {
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
    console.log("componentDidMount")
    if(this.props.option === undefined){
       this.fetchTreeJSON(0,this);
    }
  }

  renderResults() {
    return (

      <View
      style={styles.treeContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderOptions.bind(this)}>
        </ListView>
      </View>
    )
  }
renderOptions(option) {
    return (
      <View style={styles.option}>
        <View>
          <TouchableHighlight
            style={styles.treeOptions}
            underlayColor="transparent"
            activeOpacity= {0.5}
            onPressOut={this.handleSelection.bind(this,option)}>
            <View style={styles.clickableSpace}>
              <Text style={styles.treeText}>{option.name}</Text>
              <View>
                <Text style={styles.treeDescription}>{option.description}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    )
  }

  renderLoadingMessage(){
    return (
      <Image
      source={require('./img/woooooood.jpg')}
      style={styles.loadingContainer}>
         <ActivityIndicatorIOS
          animating={true}
          color={'#fff'}
          size={'small'}
          style={{margin: 15}} />
          <Text style={{color: '#fff'}}>Connecting...</Text>
      </Image>
    );
  }
};

module.exports = Tree;

