import React, {Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {TabViewAnimated, TabBar} from 'react-native-tab-view'
import Episodes from './Episodes'
import Trailers from './Trailers'

class TabsEpisodes extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key:'1', title: 'Episodes'},
                {key:'2', title: 'Trailers & More'}
            ]
        }
    }

    _handleChangeTab(index){ //Tab Activada
        this.setState({index})
    }
    _renderHeader(props){ //Componente que se paso
        return <TabBar {...props} />
    }
    _renderScene({route}){ //Controlar cuando se active una tab
        switch(route.key){
            case '1':
                return <Episodes 
                    episodes={this.props.data}
                />
            case '2':
                return <Trailers />
            default: 
                return null
        }
    }
    render(){
        return (
            <TabViewAnimated 
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene.bind(this)}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleChangeTab.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor: 'black'
    },
})

export default TabsEpisodes