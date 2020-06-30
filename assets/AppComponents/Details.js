import React from 'react';
import { ActivityIndicator,StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image, Overlay, Input, Rating, AirbnbRating,Divider} from 'react-native-elements'
import Firebase from '../../constants/Firebase';
import { max } from 'react-native-reanimated';
export default class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detail: null,
            overlay:false,
            allergene: null
        }
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
            let allergene = Object.entries(this.state.detail.allergene).map(([key, value])=>{
                return <Text key={key}>{value}</Text>
            })
            let comments = Object.entries(this.state.detail.ratings).map(([key,value])=>{
                console.log(value)
                return <Card key={key} style = {Styles.cardView}>
                    <Text>{value.comment}</Text>
                    <Rating 
                    type='custom'
                    readonly
                    imageSize={30}
                    startingValue={value.rating}
                    style = {Styles.rating} />
                </Card>
            });
            //console.log(this.props)
            return(
                <ScrollView style = {Styles.scrollView}>
                    <Image source = {{uri: this.state.detail.image}} style = {Styles.image}/>
                    <Text style = {Styles.text}>{this.state.detail.description}</Text>
                    <Button
                    title="Allergene"
                    onPress={() =>
                        this.setState({
                            overlay: true
                        })
                    }
                    />
                    <Overlay
                        isVisible={this.state.overlay}
                        onBackdropPress={() => this.setState({ overlay: false })}
                    >
                        <View>{allergene}</View>
                    </Overlay>
                    <Divider style={Styles.divider}/>
                    <Text style = {Styles.text2}>Bewertungen</Text>
                    <Button
                    title="Eigene Bewertung abgeben"
                    onPress={() =>
                        this.setState({
                            overlay: false
                        })
                    }
                    />
                    <View>
                        {comments}
                    </View>
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
    scrollView: {
        backgroundColor: '#FFFFFF'
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Roboto",
        alignSelf: "center",
        marginBottom: 15
    },
    text2:{
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto",
        alignSelf: "center",
        textAlign: "center",
        marginBottom: 5,
        marginTop: 15
    },
    image: {
        borderWidth: 1,
        height: 180,
        marginBottom: 15
    },
    divider:{
        margin:10,
        height: 1,
        backgroundColor:'#DEDEDE'
    },
    rating: {
        marginTop: 15,
        marginBottom: 10
    },
    cardView: {
        paddingBottom: 5,
        marginTop: 5
    }
})