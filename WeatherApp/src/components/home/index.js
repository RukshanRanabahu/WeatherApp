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
  ScrollView,
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
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <View style={styles.homeContainer}>
            <View style={styles.homeCard}>
              <Text style={styles.textDate}>Wed July 7th 2021</Text>
              <Text style={styles.textTemp}>45°c</Text>
              <Text style={styles.textDate}>Partly Cloudy</Text>
            </View>
          </View>

          <View style={styles.homeContainer}>
            <View style={styles.weatherInfoContainer}>
              <View style={styles.weatherCard}>
                <Text style={styles.textHeading}>Weather Information</Text>
                <Text style={styles.textDate}>show main weather details here</Text>
              </View>
              <View style={styles.weatherCard}>
                <Text style={styles.textHeading}>Weather Information</Text>
                <Text style={styles.textDate}>show main weather details here</Text>
              </View>
              <View style={styles.weatherCard}>
                <Text style={styles.textHeading}>Weather Information</Text>
                <Text style={styles.textDate}>show main weather details here</Text>
              </View>
            </View>
          </View>
        </SafeAreaView >
      </ScrollView>
    );
  }
}

const CARD_STYLE = {
  backgroundColor: "#2e86de",
  width: '80%',
  padding: 10,
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
};

const TEXT_STYLE = {
  textAlign: 'center',
  color: "#ffffff",
};

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  homeCard: {
    ...CARD_STYLE,
    minHeight: 140,
    borderRadius: 10,

  },
  weatherCard: {
    ...CARD_STYLE,
    minHeight: 110,
  },
  weatherInfoContainer: {
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    // minHeight: 140,
    width: '80%',
    // padding: 10,
    // margin: 20,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
  },
  textDate: {
    color: "#DDDDDD",
    textAlign: 'center',
    fontSize: 15
  },
  textHeading: {
    ...TEXT_STYLE,
    fontSize: 18
  },
  textTemp: {
    ...TEXT_STYLE,
    fontSize: 35
  },
  //   container: {
  //     flex: 0.3,
  //     // justifyContent: "center",
  //     paddingHorizontal: 10
  //   },
  //   button: {
  //     alignItems: "center",
  //     borderRadius: 7,
  //     backgroundColor: "#2e86de",
  //     padding: 10
  //   },
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, changeCount);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
