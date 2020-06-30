import React from 'react';
import {View,Text} from 'react-native';
import { MenuCards } from '../assets/AppComponents';
import { color } from 'react-native-reanimated';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
export default class MenuScreen extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <View>
                <MenuCards navigation={this.props.navigation}/>
            </View>
        )
    }
}