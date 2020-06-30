import React from 'react';
import { StyleSheet,View, Text,ScrollView} from 'react-native';
import Firebase from '../../constants/Firebase';

import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

export default class MensaCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cards: null
        }
    }

    render(){
        const db = Firebase.database();
        /*db.ref('/mensen/').set({
            mensa1:{id:'mensa1', name:"Mensaria im Schloss", image:"https://www.jobs-studentenwerke.de/sites/default/files/styles/logo_studentenwerk/public/user-files/Studierendenwerk%20Mannheim/logos/logostwma.png?itok=B2LojiqU"},
            mensa2:{id:'mensa2', name:"Mensaria Metropol", image:"https://designbuero-mesch.de/assets/portfolio/cd/cd-metropol-1.jpg"},
            mensa3:{id:'mensa3', name:"Cafeteria Horizonte", image:"https://www.stw-ma.de/cafeteria_horizonte-dir--height-404-width-620/_/IMG_6698.jpg"}
        })*/
        
        if(this.state.cards===null){
            db.ref('/mensen').once('value').then(response =>{
                return response.toJSON();
            }).then(data=>{
                let tmp= Object.entries(data).map(([key, value])=>{
                console.log('Key',key)
                console.log('value',value)
                return  <Card key={value.id} title={value.name} titleStyle = {Styles.title} containerStyle={Styles.containerStyle}>
                            <ScrollView>
                                <Image source = {{uri: value.image}} style = {Styles.image}/>
                                <Button
                                    title="Angebot"
                                    onPress={() =>
                                        this.props.navigation.navigate('Menu')
                                    }
                                />
                            </ScrollView>
                        </Card>;
                })
                this.setState({
                    cards: tmp
                })
            })
        }
        return (
            <View style={Styles.backgroudView}>
                 {this.state.cards}
            </View>
        )
    }
}
//styles so exportieren ist nice!
const Styles = StyleSheet.create({
    containerStyle:{
        borderRadius:5,
        backgroundColor: '#FFFFFF',
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
        flex: 1
    },
    image: {
        width: 300,
        height: 150
    }
})