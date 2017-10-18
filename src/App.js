import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import Slide from './components/Slider'
import List from './components/List'
import Header from './components/Header'
import Search from './components/Search'
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
        isOpen:!this.state.isOpen  
    })
  }

  _updateMenu(isOpen){
    this.setState({isOpen})
  }

  render() {
    return (
      <View style={styles.container}>
        <SideMenu
          menu = {<Menu/>}
          isOpen = {this.state.isOpen}
          onChange={(isOpen)=> this._updateMenu(isOpen)}>

          <View style={styles.container}>
            <Header navigation={this.props.navigation} toggle = {this.toggle.bind(this)}/>
            <Slide/>
            <List navigation={this.props.navigation}/>
          </View>
        </SideMenu>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1
  },
})

export default App
