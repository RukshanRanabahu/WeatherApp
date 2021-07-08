import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from './src/actions/counter';
import { bindActionCreators } from 'redux';
import Login from './src/components/login/index';
import Home from './src/components/home/index';


class App extends Component {

  render() {
    const { count } = this.props.count;
    return (
      // <Login />
      <Home />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)