import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Slider = props => (
    <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  image:{
      width
  }
} 

class Slide extends Component{
    constructor(props){
        super(props)
        this.state={
            imageSlider:[
                require('../images/1.jpg'),                
                require('../images/2.jpg'),
                require('../images/3.jpg'),
                require('../images/4.jpg'),                
            ]
        }
    }

    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={false} autoplay>
                {this.state.imageSlider.map((item, i) => <Slider
                    uri={item}
                    key={i}
                    />
                )}
            </Swiper>
        );
    }
}

export default Slide