import React from 'react-native'

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
      isLoading: false,
      error: false
    }
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
          style={styles.input}/>

        <TextInput
          placeholder="Confirm Password"
          password={true}
          style={styles.input}/>

        <TouchableHighlight style={styles.button}>
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




