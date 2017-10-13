import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList
} from 'react-native'

const shows_first = [
    {
        key:1,
        name:'Suits',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key:2,
        name:'Modern Family',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key:3,
        name:'The Flash',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
     },
     {
        key:4,
        name:'Supergirl',
        image:'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
     }
]

class List extends Component {

    _renderItem(item){
        console.log(item)
        return(
            <Image style={{height:180, width:120, marginLeft: 5}} source={{uri:item.image}}/>
        )
    }

    render(){
        return(
            <View >
                <View>
                <Text style = {styles.text} >My List</Text>
                    <FlatList
                        horizontal = {true}
                        inverted={false}
                        data = {shows_first}
                        renderItem = {({item}) => this._renderItem(item)}
                    />
                </View>
                <View>
                <Text style = {styles.text}>Top Picks for you</Text>
                    <FlatList
                        horizontal = {true}
                        inverted={false}
                        data = {shows_first}
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