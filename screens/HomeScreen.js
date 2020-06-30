import React from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { MensaCards } from '../assets/AppComponents';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <MensaCards navigation={this.props.navigation}/>
            </ScrollView>
        )
    }
}