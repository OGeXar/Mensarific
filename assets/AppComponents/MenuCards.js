import React from 'react';
import { StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'


const menu = [
    {id: 'Montag', food:'Montag'},
    {id: 'Dienstag', food:'Taco Tuesday'},
    {id: 'Mittwoch', food:'Mittwoch'},
    {id: 'Donnerstag', food:'Doenerstag'},
    {id: 'Freitag', food:'Freitag'},
]

const images_food = {
    Montag: "https://image.kurier.at/images/cfs_landscape_616w_347h/2335737/297867683.jpg",
    Dienstag: "https://purelimon.de/wp-content/uploads/2019/07/Einfaches-Rezept-f%C3%BCr-vegane-Tacos.jpg",
    Mittwoch: "https://images.lecker.de/,id=af97db8b,b=lecker,w=610,cg=c.jpg",
    Donnerstag: "https://www.sueddeutsche.de/image/sz.1.4927703/640x360?v=1591287302",
    Freitag: "https://bit.ly/2NUlRIN"
}

const beschreibung_food = {
    Montag: "Burger mit Pommes",
    Dienstag: "Tacos",
    Mittwoch: "Lachs mit Kartoffeln",
    Donnerstag: "Döner",
    Freitag: "Pizza"
}


export default class MenuCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const foodCards = menu.map(food=>{
            return <Card key={food.id} title={food.food} titleStyle = {Styles.title} containerStyle={Styles.card}>
                <ScrollView>
                    <Text style = {Styles.text}> {beschreibung_food[food.id]}</Text>
                    <Image source = {{uri: images_food[food.id]}} style = {Styles.image}/>
                    <Button buttonStyle = {Styles.button}
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
            <ScrollView style = {Styles.backgroudView}>
                {foodCards}
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    card:{
        borderRadius:5,
        backgroundColor: '#DEDEDE',
        flexDirection: 'row'
    },
    defaultText:{
        fontSize: 14,
        color: 'black',
        fontFamily: 'Roboto' 
    },
    title:{
        fontSize: 16,
        textAlign: "left",
        color: 'black',
        fontFamily: 'Roboto'
    },
    backgroudView:{
        backgroundColor: '#383F4A',
    },
    image: {
        width: 150,
        height: 150,
        marginLeft: 150,
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    button: {
        fontWeight: "bold"
    },
    text: {
        alignSelf: "flex-start",
        fontFamily: 'Roboto',
        marginLeft: 0,
        flexDirection: 'row-reverse',
        flexWrap: "wrap"
    }
})