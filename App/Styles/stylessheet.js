var React = require('react-native');
var Dimensions = require('Dimensions');
var { width, height }= Dimensions.get('window');
var {
  StyleSheet
} = React;
var styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    alignItems: "flex-start",
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
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 42,
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 15,
    color: 'black'
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
   buttonContainer: {
    marginBottom:  40,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'lightsteelblue',
    width: width * 0.85,
    height: 200
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    height: 100,
    paddingLeft: 25,

  },

  buttonText: {
    paddingLeft: 10,
    width: 200,
    fontSize: 42,
    fontFamily: 'Cochin-BoldItalic',
    alignSelf: 'center',
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
  treeDescription:{
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
  },
  profileImage:{
    width: 375,
    height: 375,
    marginBottom: 42,
  },
  drinkDescription:{
    color: "black",
    alignSelf: 'center',
    fontFamily: 'Georgia',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  }
});
module.exports = styles;
