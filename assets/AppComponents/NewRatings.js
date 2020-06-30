import React from 'react';
import { ActivityIndicator,StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image, Overlay, Input, Rating, AirbnbRating,Divider} from 'react-native-elements'
import Firebase from '../../constants/Firebase';
export default class NewRatings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detail: null,
            rating: 0,
            input:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ratingCompleted = this.ratingCompleted.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    ratingCompleted(rating){
        console.log('rating',rating)
        this.setState({
            rating: rating
        })
    }
    handleInput(event){
        this.setState({
            input: event.nativeEvent.text
        })
    }
    handleSubmit(){
        const db = Firebase.database();
        let tmpID = 0;
        Object.entries(this.state.detail.ratings).map(key=>{
            tmpID = tmpID+1;
        })
        tmpID = tmpID+1;
        let tempID = 'id'+tmpID;
        let tmp = {
            ...this.state.detail.ratings,
            [tempID]:{comment:this.state.input, rating:this.state.rating}
        };
        console.log('tmp',tmp)
                        
        db.ref('/menues/'+this.props.route.params.menuID).set({
            id:this.state.detail.id, title: this.state.detail.title, image:this.state.detail.image, description:this.state.detail.description, allergene:this.state.detail.allergene,ratings:tmp
        })
    }
    render(){
        const db = Firebase.database();
        if(this.state.detail === null){
            db.ref('/menues/'+this.props.route.params.menuID).once('value').then(response=>{
                return response.toJSON();
            }).then(data=>{
                this.setState({
                    detail: data
                })
            })
        }else{
            
            return(
                <ScrollView>
                    <Image source = {{uri: this.state.detail.image}} style = {Styles.image}/>
                    <Text style = {Styles.text_beschreibung}>{this.state.detail.description}</Text>
                    <Rating
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                    />
                    <Input placeholder='TEST' onChange={this.handleInput}/>
                    <Button
                        title="Abschicken"
                        onPress={this.handleSubmit}
                    />
                </ScrollView>
            )
        }
        return(
            <ScrollView contentContainerStyle={Styles.loadingContainer}>
                <ActivityIndicator size="large" color="#383F4A" />
                <Text>Loading</Text>
            </ScrollView>
        )
    }
}
const Styles = StyleSheet.create({
    loadingContainer:{
        flex: 1,
    },
    image: {
        borderWidth: 1,
        height: 180,
        marginBottom: 15
    },
    text_beschreibung:{
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Roboto",
        alignSelf: "center",
        marginBottom: 15,
        color: 'white'
    },
})