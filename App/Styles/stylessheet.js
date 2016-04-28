var React = require('react-native');
var Dimensions = require('Dimensions');
var { width, height }= Dimensions.get('window');
var {
  StyleSheet
} = React;
var styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    alignItems: "flex-start",

  },
  searchContainer:{
    borderColor: "darkgrey",
    borderWidth: 2,
    flexDirection: 'row',
    borderRadius: 8,
    marginLeft: 5,
    marginTop: 4,
    marginBottom: 4,
  },
  searchInput: {
    paddingLeft: 4,
    flex: 2,
    height: 33,
    width: width * 0.78,
    fontFamily: 'Georgia',
    fontSize: 18,
    borderRadius: 8,
    color: 'peru',
    alignSelf: 'flex-end',
  },
  searchButton:{
    backgroundColor: 'darkgrey',
    height: 33,
    flex: 2,
    width: 60,
  },
  searchbuttonText: {
    marginTop: 9,
    fontFamily: 'Georgia',
    fontSize: 12,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
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
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },

  buttonText: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  barButtonImg: {
    borderColor: 'darkgrey',
    borderWidth: 1,
    flex: 1,
    height: 100,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    width: width,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgrey',
  },
  barTextView: {
    alignSelf:"flex-end",
    backgroundColor: 'gainsboro',
    opacity: 0.5,
    height: 45,
  },
  barButtonText: {
    paddingLeft: 5,
    width: width,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    fontSize: 24,
    fontFamily: 'Cochin-BoldItalic',
    color: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
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
    width: width,
  },

  listView:{
    width: width,
    marginLeft: 0,
    backgroundColor:"#f5f5f5",
  },
  test: {
    color: "#000"
  }
});
module.exports = styles;
