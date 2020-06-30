import React from 'react';
import { StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'


const menu = [
    {id: 'Montag', food:'Burger mit Pommes'},
    {id: 'Dienstag', food:'Spaetzle mit Rahmsauce'},
    {id: 'Mittwoch', food:'Lachs mit Kartoffeln'},
    {id: 'Donnerstag', food:'Doenerstag'},
    {id: 'Freitag', food:'Pizza'},
]

export default class MenuCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const foodCards = menu.map(food=>{
            return <Card key={food.id} title={food.food}>
                <ScrollView>
                    <Button
                        title="Details"
                        onPress={() =>
                            this.props.navigation.navigate('Detail',{

                            })
                        }
                    />
                </ScrollView>
            </Card>
        })
        return(
            <ScrollView>
                {foodCards}
            </ScrollView>
        )
    }
}