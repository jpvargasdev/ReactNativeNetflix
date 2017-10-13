import React,{Component, PropTypes} from 'react';
import {
} from 'react-native'

import App from './App'
import Search from './components/Search'
import buildStyleInterpolator from 'buildStyleInterpolator'

const NoTransition={
    opacity:{
        from: 1, 
        to:1,
        min:1,
        max:1,
        type:'linear',
        extrapolate:false,
        round:100
    }
}

class IndexApp extends Component {

    _renderScene(route,navigator){
        var navigator = {navigator}

        switch(route.ident){
            case 'App' :
                return(
                    <App/>
                )
            case 'App':
                return(
                    <Search/>
                )
        }
    }

   
    render(){
        return(
            <Navigator
                initialRoute={{ident:'Search'}}
                renderScene={this._renderScene}
            />
        )
    }
}

export default IndexApp