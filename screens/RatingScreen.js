import React from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import { NewRatings } from '../assets/AppComponents';
export default class RatingScreen extends React.Component{
    render(){
        return(
            <ScrollView>
                <NewRatings navigation={this.props.navigation} route={this.props.route}/>
            </ScrollView>
        )
    }
}