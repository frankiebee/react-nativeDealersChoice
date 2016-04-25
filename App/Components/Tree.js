var React = require('react-native');

var {
	ActivityIndicatorIOS,
	Component,
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
			<Text style={styles.mainContainer}> YOU SUCK REACT </Text>
		)
	}

	constructor(props) {
		super(props);
		this.state = {
			treeJSON: [],
			isLoading: true
		};
	}

	fetchTreeJSON() {
		var url = `http://localhost:3000/tags?={tag.id}`;
		fetch(url)
			.then( response => response.json() )
			.then( jsonData => {
				console.log(jsonData);
				this.setState(
				{isLoading: false}
				);
			})
			.catch( error => console.log('fetch error ' + error) )
	}

	componentDidMount() {
		this.fetchTreeJSON();
	}

};

module.exports = Tree;








