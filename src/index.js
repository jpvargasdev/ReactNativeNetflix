import React, {Component} from 'react';
import {Provider, connect} from 'react-redux'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'

import App from './App'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'


const IndexApp = StackNavigator({
  Home: {
    screen: App,
    headerMode: 'none',
    navigationOptions: {
      header: null
    }
  },
  Details: {
    screen: Details,
    headerMode: 'none', 
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: Search,
    headerMode: 'none', 
    navigationOptions: {
      header: null
    }  
  },
  Video: {
    screen: Video,
  },
  
}, {
  headerMode: 'screen'
})


export default IndexApp



