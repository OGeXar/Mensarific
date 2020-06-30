import React from 'react';
import { StyleSheet,View, Text,ScrollView} from 'react-native';

import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
const mensen = [
    {id: 'mensa1', name: 'Mensaria im Schloss'},
    {id: 'mensa2', name: 'Mensaria Metropol'},
    {id: 'mensa3', name: 'Cafeteria Horizonte'}
]
export default class MensaCards extends React.Component{
    constructor(props){
        super(props);
      }
    render(){
        console.log(this.props.navigation)
        const images = {
            mensa1: "https://www.jobs-studentenwerke.de/sites/default/files/styles/logo_studentenwerk/public/user-files/Studierendenwerk%20Mannheim/logos/logostwma.png?itok=B2LojiqU",
            mensa2: "https://designbuero-mesch.de/assets/portfolio/cd/cd-metropol-1.jpg",
            mensa3: "https://www.stw-ma.de/cafeteria_horizonte-dir--height-404-width-620/_/IMG_6698.jpg"
        }
        const cards = mensen.map(mensa=>{
            return  <Card key={mensa.id} title={mensa.name} titleStyle = {Styles.title} containerStyle={Styles.containerStyle}>
                        <ScrollView>
                            <Image source = {{uri: images[mensa.id]}} style = {Styles.image}/>
                            <Button
                                title="Angebot"
                                onPress={() =>
                                    this.props.navigation.navigate('Menu')
                                }
                            />
                        </ScrollView>
                    </Card>;
        })
        return (
            <View   style={Styles.backgroudView}>
                    {cards}
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