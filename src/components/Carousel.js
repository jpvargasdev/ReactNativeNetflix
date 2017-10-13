import React, {Component} from 'react'
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    Image,
    Button
} from 'react-native'

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
import Carousel from 'react-native-snap-carousel';
import {ENTRIES1, ENTRIES2} from '../static/entries'
import styles from '../styles/index.style'
import slideEntry from '../styles/SliderEntry.style'

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
export default class Carouselic extends Component {

    _renderItem ({item, index}) {
        console.log(item)
        
        return (
            <View style = {slideEntry.radiusMask}>
                <Text style = {styles.title}>{item.name}</Text>
                <Image style={{width:120, height: 180}} source={{uri:item.image}}/>
            </View>
        );
    }

    render () {
        return (
            
            <Carousel
              data={shows_first}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum={true}
              activeSlideAlignment={'start'}
              removeClippedSubviews={false}
            />
        );
    }

}

