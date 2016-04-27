var React = require('react-native');
var Dimensions = require('Dimensions');
var { width, height }= Dimensions.get('window');
var {
  StyleSheet
} = React;
var styles = StyleSheet.create({

  mainContainer: {
    marginTop: 20,
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
    opacity: 0.2
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  buttonImg: {
    flex: 1,
    height: 45,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
    overflow: 'hidden',
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  mainContainerImg: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 30,
    marginTop: 65,
    flexDirection: 'column',
    height: height,
    width: width,
  },
  loadingImage: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 30,
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    width: null,
    height: null,
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
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'

  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width
  },

  clearBack: {
    backgroundColor: 'transparent',
  }
});
module.exports = styles;
