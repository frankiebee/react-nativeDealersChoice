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
  buttonContainer: {
    position: 'absolute',
    top: 100,
    left: 115,
  },

  searchContainer:{
  flexDirection: 'row',
  },
  searchInput: {
    flex: 2,
    height: 33,
    width: width * 0.78,
    padding: 4,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 6,
    marginBottom: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'peru',
    alignSelf: 'flex-end',
  },
  searchButton:{
    height: 33,
    flex: 2,
    width: 60,
  },
  searchbuttonText: {
    marginTop: 13,
    fontSize: 14,
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
    backgroundColor: 'gray'
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
    flex: 1,
    height: 100,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    width: width,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    fontFamily: 'Cochin',
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
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',

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
  treeContainer:{
    backgroundColor: "#f5f5f5",
    flex: 1,
    marginTop: 65,
    flexDirection: 'row',
    alignItems: "flex-start",

  },
  option:{
    borderColor: "lightsteelblue",
    borderWidth: 2,
    borderRadius: 8,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
    marginBottom: 4,
  },
  treeOptions:{
    flex: 1,
    alignSelf: 'center',
  },
  treeText:{
    fontSize: 42,
    fontFamily: 'Cochin-BoldItalic',
    paddingBottom: 11,
  },
  treeDicription:{
    color: "black",
    alignSelf: 'center',
    fontFamily: 'Georgia',
  },
  clickableSpace:{
    marginBottom: 50,
    marginTop: 50,
    width: 200,
    height: 100,
    backgroundColor: 'transparent',
  }
});
module.exports = styles;
