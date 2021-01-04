import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import RootDrawer from './routes/drawer';
// import HomeStack from './routes/homeStack';

export default class App extends Component {
  state = {
    loading: false
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
      'NunitoBold': require('./assets/fonts/Nunito-Bold.ttf')
    });
    this.setState({ loading: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.loading) {
      return (
        // <HomeStack />
        <RootDrawer />
      );
    } else {
      return (
        <AppLoading />
      );
    }
  }

}
