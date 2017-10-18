import React, {Component} from 'react';
import {Provider, connect} from 'react-redux'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'

import App from './App'
import Search from './components/Search'
import Details from './components/Details'
import Video from './components/VideoPlayerView'


const IndexApp = StackNavigator({
  Video: {
    screen: Video,
    headerMode: 'none',
    navigationOptions: {
      header: null
    }
  },
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
  
}, {
  headerMode: 'screen'
})


export default IndexApp



