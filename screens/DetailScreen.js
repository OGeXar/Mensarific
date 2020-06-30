import React from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { Details } from '../assets/AppComponents';
export default class HomeScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <Details navigation={this.props.navigation} route={this.props.route}/>
            </ScrollView>
        )
    }
}