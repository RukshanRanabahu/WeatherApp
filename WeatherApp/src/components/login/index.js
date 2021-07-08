import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  YellowBox,
} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from '../../actions/counter';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username}  ${password}`);
  }

  render() {
    const { count } = this.props.count;
    return (
      <SafeAreaView>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder={' email address'}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={styles.input}
            placeholder={' password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text style={styles.textColor}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    height: '90%',
    margin: 20,
  },
  input: {
    // width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 7,
  },
  buttonInput: {
    borderRadius: 10,
    // alignItems: "center",
    backgroundColor: "#DDDDDD",
    margin: 20
  },
  textColor: {
    color: "#ffffff"
  },
  container: {
    flex: 0.3,
    // justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#2e86de",
    padding: 10
  },
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, changeCount);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
