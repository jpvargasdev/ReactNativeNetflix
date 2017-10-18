import React, {Component} from 'react'
import {View,Text, TouchableWithoutFeedback, StyleSheet, ImageBackground, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
class Trailers extends Component{

    renderEpisodes(){
        const res = this.props.episodes.map((item, i) =>{

            const img = item.image == null ? item.thumbnail : item.image.medium

            return(
                <View style={styles.video} key={i}>
                    <View style={styles.videoEpisode}>
                        <ImageBackground style={styles.image} source={{uri:img}}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback style= {{backgroundColor:'transparent'}}>
                                    <View>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}.{item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
    
                        </View>
                    </View>
                    <Text style={styles.summary}>{item.summary}</Text>
                </View>
            )
        })
        return res
    }

    render(){
        const {episodes} = this.props.episodes
        console.log(episodes)
        return (
            <View style={styles.container}>
                {this.renderEpisodes()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10
    },
    image:{
        width:150,
        height:80,
        marginRight:10
    },
    buttonPlay:{
        justifyContent:'center',
        alignItems: 'center',
        flex:1
    },
    episodeName:{
        justifyContent:'center'

    },
    videoEpisode:{
        flexDirection: 'row'

    },
    text:{
        color: 'white'
    },
    summary:{
        color:'grey',
        marginVertical:10
    },
    iconPlay:{
        backgroundColor:'transparent',
        opacity: 0.7
    }

})

export default Trailers
