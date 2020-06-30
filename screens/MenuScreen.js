import React from 'react';
import {View,Text} from 'react-native';
import { MenuCards } from '../assets/AppComponents';
export default class MenuScreen extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <View style={{paddingTop:20}}>
                <MenuCards navigation={this.props.navigation}/>
            </View>
        )
    }
}