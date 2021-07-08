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
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { loginAuthData } from '../../actions/login';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
    };
  }

  /**
   * @description Render Weather Details
   * @memberof Login
   */
  renderWeatherDetails = ({ item, index }) => {
    return (
      <View key={index} style={styles.weatherCard}>
        <Text style={styles.textHeading}>{item.label}</Text>
        <Text style={styles.textDate}>{item.description}</Text>
      </View>
    );
  }

  render() {
    const { count } = this.props.count;

    // ** I hard code this weatherInfo because http://test.rightapps.com.au/weather api returns empty response (no details in that response)
    const weatherInfo = [
      {
        label: "Weather Information",
        description: "show main weather details here"
      },
      {
        label: "Sunrise/Sunset Information",
        description: "show Sunrise/Sunset details here"
      },
      {
        label: "Sunrise/Sunset Information",
        description: "show Sunrise/Sunset details here"
      }
    ];
    
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
              <FlatList
                data={weatherInfo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderWeatherDetails}
              />
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
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
  }
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, loginAuthData);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
