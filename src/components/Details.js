import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    Animated,
    ImageBackground
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

import {replaceHttps, getYear, removeHtmlTags} from '../lib' 

const {width, height} = Dimensions.get('window')

class Details extends Component {
    
    render(){
        const {params} = this.props.navigation.state
        const {cast, year, description, creator, numOfEpisodes, season} = params.item.details
        const {name} = params.item           
        const {episodes} = params.item.details
        return(
            <ScrollView style = {styles.container}>

                <ImageBackground
                    style = {styles.thumbnail}
                    source = {{uri: params.item.details.thumbnail}} >
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback>
                            <View>
                                <Icon
                                    style={styles.iconPlay}
                                    name='play-circle'
                                    size={90}
                                    color='white'
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.nameContainer}>
                        <TextGradient colors={['transparent', '#181818', '#181818']}>
                            <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                        </TextGradient>
                    </View>
                </ImageBackground>
                <View style ={styles.descroptionContainer}>
                    <View style={styles.subtitle}>
                        <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
                        <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
                        <Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={[styles.text, styles.light]}>{description}</Text>
                        <Text style={[styles.text]}>Cast: {cast}</Text>
                        <Text style={[styles.text]}>Creator: {creator}</Text>
                    </View>

                    <View style= {styles.shareListIcons}>
                        <View style= {styles.myListIcon}>
                            <IonIcons
                                style={styles.listIcon}
                                name='md-checkmark'
                                size={25}
                                color='grey'
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <View style= {styles.myShareIcon}>
                            <Icon
                                style={styles.shareIcon}
                                name='share-alt'
                                size={25}
                                color='grey'
                            />
                            <Text style={styles.text}>Share</Text>
                        </View>

                    </View>
                </View>

                <TabsEpisodes data={episodes}/>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer:{
        backgroundColor:'transparent',
    },
    titleShow:{
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container:{
        flex:1,
        backgroundColor: '#181818'
    },
    thumbnail:{
        width:width,
        height:300
    },
    buttonPlay:{
        justifyContent:'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay:{
        opacity:0.7,
        backgroundColor: 'transparent'
    },
    descroptionContainer:{
        paddingHorizontal: 20,

    },
    subtitle:{
        flexDirection: 'row'
    },
    subTitleText:{
        marginRight: 20
    },
    text:{
        color: '#b3b3b3',
        fontSize: 16
    },
    shareListIcons:{
        flexDirection: 'row',
        marginVertical: 30
    },
    listIcon:{
        height: 25
    },
    shareIcon:{
        height: 25
    },
    myListIcon:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description:{
        marginVertical: 10,
    },
    light: {
        fontWeight: '200'
    }
})

export default Details