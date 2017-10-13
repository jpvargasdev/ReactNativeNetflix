import React,{Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'


import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'


const {width, height} = Dimensions.get('window')

class Menu extends Component{
    render(){
        return(
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style = {styles.avatarImage}>
                        <Text style ={styles.text}>Logo</Text>
                        <Text style ={styles.text}>Juan Paco</Text>
                    </View>
                    <Icon
                        name="exchange"
                        color='white'
                        size={25}>
                    </Icon>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style = {styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Icon
                                style={styles.iconWithText}
                                name='download'
                                color='white'
                                size={28}
                            />
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name='angle-right'
                            color='white'
                            size={25}
                        />
                    </View>
                    <View style = {styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Ionicons
                                style={styles.iconWithText}
                                name='md-checkmark'
                                color='white'
                                size={28}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name='angle-right'
                            color='white'
                            size={25}
                        />
                    </View>

                    <View style={[styles.items, styles.itemSelected]}>
                        <Text style={styles.text}>Home</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Available for Download</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Netflix Originals</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>TV Shows</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Actions & Adventure</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Children & Family Movies</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Comedies</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Documentaries</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Dramas</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Independent Movies</Text>
                    </View>
                    <View style={[styles.items, styles.noSelectedItems]}>
                        <Text style={styles.text}>Indian Movies</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#191919"
    },
    avatarContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width/2 +50,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal:20,
        paddingVertical:30
    },
    avatar:{
        width:60,
        height:60,
        marginRight:20
    },
    avatarImage:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        color:'#b3b3b3',
        fontSize: 13,
        marginLeft:20
    },
    textWithIcon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingVertical: 20,
        borderColor: '#000',
        borderBottomWidth:3,
        height:50
    },
    withIcon:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:10
    },
    scrollContainer: {
        width: width / 2 + 50
    },
    rightIcon:{
        paddingRight:20
    },
    iconWithtext:{
        marginRight:30,
        paddingLeft:30
    },
    items:{
        paddingVertical:10,
        paddingLeft:20,
        marginTop: 5

    },
    itemSelected:{
        borderLeftWidth:5,
        borderColor:'red'
    }
})

export default Menu
 