import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import Icon from 'react-native-vector-icons/dist/FontAwesome'

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height: 60,
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: 'black'
    },
    logo:{
        color:'red',
        fontSize:30
    }
})

const Header = props => {
    const {navigate} = props.navigation
    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
            <Text style={styles.logo}>NETFLIX</Text>
            <TouchableWithoutFeedback onPress={()=> navigate('Search')}>
            <Icon
                name="search"
                color="white"
                size={25}
            />
            </TouchableWithoutFeedback>
        </View>
    )
}



export default Header