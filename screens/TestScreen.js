import React from 'react';
import {View,Text,Button} from 'react-native';
import { TestComponent } from '../assets/AppComponents';
export default class TestScreen extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <View style={{paddingTop:20}}>
                <TestComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}