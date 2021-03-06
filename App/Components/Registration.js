import React from 'react-native'
var api = require('../Utils/api');

const {
  Text,
  TextInput,
  View,
  TouchableHighlight
} = React;

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      email: event.nativeEvent.text
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.nativeEvent.text
    })
  }

  handleConfirmationPassword(event) {
    this.setState({
      confirmPassword: event.nativeEvent.text
    })
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    });

    api.register(this.state.email)
      .then((res) => {
        console.log(res)
        console.log(email)
      }); // end .then((res)
    }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={this.state.email}
          onChange={this.handleChange.bind(this)}/>

        <TextInput
          placeholder="Password"
          password={true}
          style={styles.input}
          value={this.state.password}
          onChange={this.handlePassword.bind(this)}/>

        <TextInput
          placeholder="Confirm Password"
          password={true}
          style={styles.input}
          value={this.state.confirmPassword}
          onChange={this.handleConfirmationPassword.bind(this)}/>

        <TouchableHighlight
          onPress={this.handleSubmit.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>sign-up</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = React.StyleSheet.create({
  // use flex to control style of children
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

module.exports = Registration;




