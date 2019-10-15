import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator';
import Background from './components/Background';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    } else {
      return (
        <Background>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Background>
      );
    }
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        Mulder: require('./assets/fonts/MuldersHandwriting.ttf'),
        PerfectDos: require('./assets/fonts/PerfectDOSVGA437.ttf'),
      }),
    ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
