import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import VideoPlayer from 'react-native-video-controls'

class VideoPlayerView extends Component {
    render(){
        return(
            <View style= {styles.container}>
                <VideoPlayer
                    source={require('../videos/video.mp4')}
                    title={this.props.title}
                    onBack={()=> null}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default VideoPlayerView