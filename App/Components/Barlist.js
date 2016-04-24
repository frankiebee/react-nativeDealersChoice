var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');

class BarList extends React.Component{
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  componentDidMount() {
    this.loadBarList();
  }

  loadBarList(){
    api.barList()
    .then((response) => {
      // debugger;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(response),
        loaded: true
      });
    })
    .done();
  }

  render() {
    return (
      <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderBar}
       style={styles.listView}/>
    );
  }

  renderBar(bar){
    return(
      <BarCell Bar={bar}/>
    );
  }
};

module.exports = BarList;
