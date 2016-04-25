import React from 'react-native'

const {
  Text,
  TextInput,
  View,
  TouchableHighlight
} = React;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}/>

        <TextInput
          placeholder="Password"
          style={styles.input}/>

        <TouchableHighlight
          // onPress={this.handleSubmit.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 150,
    backgroundColor: "#f7f7f7"
  },
  input: {
    borderWidth: 1,
    borderColor: "#d7d7d7",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 15,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fafafa"
  },
  button: {
    height: 45,
    alignSelf: "stretch",
    backgroundColor: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

module.exports = Login;




