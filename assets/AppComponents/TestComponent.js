import React from 'react';
import { View, Text } from 'react-native';
import ApiKeys from '../../constants/ApiKeys';
import * as firebase from 'firebase';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
const mensen = [
    {name: 'Schloss Mensa', test: 'test'},
    {name: 'DHBW Mensa', test: 'test'},
    {name: 'Test Mensa', test: 'test'}
]
export default class TestComponent extends React.Component{
    constructor(props){
        super(props);
        if(!firebase.apps.length){
          firebase.initializeApp(ApiKeys.FirebaseConfig); 
        }
      }
    render(){
        const db = firebase.database();
        db.ref
        const cards = mensen.map(mensa=>{
            return <Card key={mensa.name} title={mensa.name} containerStyle={{borderRadius:10}}><View><Text>{mensa.test}</Text></View></Card> 
        })
        return (
            <View>
                 {cards}
            </View>
        )
    }
}