import React from 'react';
import { StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image, Rating, AirbnbRating } from 'react-native-elements'
import Firebase from '../../constants/Firebase';



export default class MenuCards extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodCards: null
        }
    }
    render(){
        const db = Firebase.database();
        
        db.ref('/menues/').set({
            wochenTag1:{id: 'Montag', title:'Montag', image:"https://image.kurier.at/images/cfs_landscape_616w_347h/2335737/297867683.jpg", description: "Burger mit Pommes", allergene:{allergen1:"Ei",allergen2:"Haselnuss",allergen3:'Laktose',allergen4:'Nuesse'}, ratings:{id:0, rating:0, comment:'test'}},
            wochenTag2:{id: 'Dienstag', title:'Taco Tuesday', image:"https://purelimon.de/wp-content/uploads/2019/07/Einfaches-Rezept-f%C3%BCr-vegane-Tacos.jpg", description: "Tacos",allergene:{allergen1:"Ei",allergen2:"Haselnuss",allergen3:'Laktose',allergen4:'Nuesse'}},
            wochenTag3:{id: 'Mittwoch', title:'Mittwoch', image: "https://images.lecker.de/,id=af97db8b,b=lecker,w=610,cg=c.jpg", description: "Lachs mit Kartoffeln",allergene:{allergen1:"Ei",allergen2:"Haselnuss",allergen3:'Laktose',allergen4:'Nuesse'}},
            wochenTag4:{id: 'Donnerstag', title:'Dönerstag', image:"https://www.sueddeutsche.de/image/sz.1.4927703/640x360?v=1591287302", description: "Döner",allergene:{allergen1:"Ei",allergen2:"Haselnuss",allergen3:'Laktose',allergen4:'Nuesse'}},
            wochenTag5:{id: 'Freitag', title:'Freitag', image:"https://bit.ly/2NUlRIN", description: "Pizza",allergene:{allergen1:"Ei",allergen2:"Haselnuss",allergen3:'Laktose',allergen4:'Nuesse'}}
        })
        if(this.state.foodCards===null){
            db.ref('/menues/').once('value').then(response=>{ 
                return response.toJSON()
            }).then(data=>{
                let tmp = Object.entries(data).map(([key, value])=>{
                    return <Card key={value.id} title={value.title} titleStyle = {Styles.title} containerStyle={Styles.card}>
                            <ScrollView>
                                <Image source = {{uri: value.image}} style = {Styles.image}/>  
                                <Text style = {Styles.text}> {value.description} 5,00€  </Text>
                                <Rating 
                                    type='custom' 
                                    imageSize={30} 
                                    readonly
                                    style = {Styles.rating} />
                                <Button buttonStyle = {Styles.button}
                                    title="Details"
                                    onPress={() =>
                                        this.props.navigation.navigate('Detail',{
                                            menuID: key
                                        })
                                    }
                                />
                            </ScrollView>
                        </Card>
                })
                this.setState({
                    foodCards:tmp
                })
            })
        }

        return(
            <ScrollView style = {Styles.backgroudView}>
                {this.state.foodCards}
            </ScrollView>
        )
    }
}

const Styles = StyleSheet.create({
    card:{
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
    },
    image: {
        borderWidth: 1,
        height: 150,
    },
    button: {
        fontWeight: "bold"
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "flex-start",
        fontFamily: 'Roboto',
        marginLeft: 0,
        textAlign: "left"
    },
    rating: {
        paddingBottom: 10
    }
})