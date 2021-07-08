// import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {loginAuthData} from './src/actions/login';
import {bindActionCreators} from 'redux';
import Login from './src/components/login/index';
import Home from './src/components/home/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  loginData: state.loginData,
});

const ActionCreators = Object.assign({}, loginAuthData);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
