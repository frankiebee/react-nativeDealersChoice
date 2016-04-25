var React = require('react-native')

var {
	Text,
	View,
	StyleSheet
} = React;

var StyleSheet.create({
	container: {
		backgroundColor: '#48BBEC',
		paddingBottom: 10
	},
	name: {
		alignSelf: 'center',
		fontSize: 21,
		marginTop: 10,
		marginBottom: 5,
		color: 'white'
	},
});

class Badge extends React.Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.name}> {this.props.barInfo.name} </Text>
			</View>
		)
	}
};

Badge.propTypes = {
	barInfo: React.PropTypes.object.isRequired
};

module.exports = Badge;