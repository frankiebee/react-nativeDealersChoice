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
	View,
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
		var {isLoading} = this.state;
		if(isLoading) {
			return this.renderLoadingMessage();
		}
		else
			return this.renderResults();
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


	renderOptions(option) {
		return (
			<View>
				<View>
					<TouchableHighlight
						style={stylesMain.button}
						onPress={this.handleSelection.bind(this,option)}
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

	fetchTreeJSON(tag) {
		var url = `http://localhost:3000/tags?id=${tag}`;
		fetch(url)
			.then( response => response.json() )
			.then( jsonData => {
				var isthend = false
				if(jsonData.current_drink !== undefined){isthend = true}
				console.log(jsonData);
					this.setState({
						isTheEnd: isthend,
						upComing: jsonData,
						dataSource: this.state.dataSource.cloneWithRows(jsonData, jsonData.id),
					isLoading: false
		})
			})
			.catch( error => console.log('fetch error ' + error) ).done();
	}

	handleSelection(option) {
		this.fetchTreeJSON(option.id);
		if(this.state.isTheEnd) {
			this.props.navigator.push({
				title: this.props.option.current_drink.name,
				component: DealersDrink,
				passProps: {dealersChoice: this.props.option}
			});
		}
		else {
			this.props.navigator.push({
				title: option.name,
				component: Tree,
				passProps: {option: option}
			});
		}
		this.setState({
			isLoading: false,
			error: false,
		})
	}

	componentDidMount() {
		if(this.props.option){
			this.fetchTreeJSON(this.props.option.id);
		}
		else {
			this.fetchTreeJSON(0);
		}
	}
};

module.exports = Tree;








