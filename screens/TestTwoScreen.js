import React from 'react';
import {View,Text} from 'react-native';
import { TestTwoComponent } from '../assets/AppComponents';
export default class TestTwoScreen extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <View style={{paddingTop:20}}>
                <TestTwoComponent/>
            </View>
        )
    }
}