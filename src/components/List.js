import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native'

import {getTwoItems} from '../api/api'

class List extends Component {

    _renderItem(item){
        const {navigate} = this.props.navigation
        return(
            <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
                <Image style={{height:180, width:120, marginLeft: 5}} source={{uri:item.image}}/>
            </TouchableWithoutFeedback>
        )
    }

    render(){
        console.log(this.props)
        return(
            <View >
                <View>
                <Text style = {styles.text} >My List</Text>
                    <FlatList
                        horizontal = {true}
                        inverted={false}
                        data = {getTwoItems[0]}
                        renderItem = {({item}) => this._renderItem(item)}
                    />
                </View>
                <View>
                <Text style = {styles.text}>Top Picks for you</Text>
                    <FlatList
                        horizontal = {true}
                        inverted={false}
                        data = {getTwoItems[1]}
                        renderItem = {({item}) => this._renderItem(item)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'white'
    }
})

export default List