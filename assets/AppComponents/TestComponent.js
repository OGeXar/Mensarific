import React from 'react';
import { StyleSheet,View, Text} from 'react-native';
import ApiKeys from '../../constants/ApiKeys';
import * as firebase from 'firebase';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'
const mensen = [
    {id: 'mensa1', name: 'Mensaria im Schloss'},
    {id: 'mensa2', name: 'Mensaria Metropol'},
    {id: 'mensa3', name: 'Cafeteria Horizonte'}
]
export default class TestComponent extends React.Component{
    constructor(props){
        super(props);
        if(!firebase.apps.length){
          firebase.initializeApp(ApiKeys.FirebaseConfig); 
        }
      }
    render(){
        console.log(this.props.navigation)
        const db = firebase.database();
       
        const images = {
            mensa1: "https://bit.ly/2Vx69qX",
            mensa2: "https://designbuero-mesch.de/assets/portfolio/cd/cd-metropol-1.jpg",
            mensa3: "https://www.stw-ma.de/cafeteria_horizonte-dir--height-404-width-620/_/IMG_6698.jpg"
        }
        const cards = mensen.map(mensa=>{
            return  <Card key={mensa.id} title={mensa.name} titleStyle = {Styles.title} containerStyle={Styles.containerStyle}>
                        <View>
                            <Image source = {{uri: images[mensa.id]}} style = {Styles.image}/>
                            <Button
                                title="Angebot"
                                onPress={() =>
                                    this.props.navigation.navigate('TestTwo')
                                }
                            />
                        </View>
                    </Card>;
        })
        return (
            <View style={Styles.backgroudView}>
                 {cards}
            </View>
        )
    }
}
//styles so exportieren ist nice!
const Styles = StyleSheet.create({
    containerStyle:{
        borderRadius:5,
        backgroundColor: '#DEDEDE'
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
        width: 200,
        height: 150
    }
})