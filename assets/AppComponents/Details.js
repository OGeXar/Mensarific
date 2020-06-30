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
                return <Card style = {Styles.cardView}>
                    <Text>{this.state.detail.ratings.comment}</Text>
                    <Rating 
                    type='custom'
                    readonly
                    imageSize={30} 
                    style = {Styles.rating_comments} />
                </Card>
            });
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
                    <View style = {Styles.comment}>
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
        backgroundColor: '#383F4A',
        flex: 1
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Roboto",
        alignSelf: "center",
        marginBottom: 15,
        color: 'white'
    },
    text2:{
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto",
        alignSelf: "center",
        textAlign: "center",
        marginBottom: 8,
        marginTop: 12,
        color: 'white'
    },
    image: {
        borderWidth: 1,
        height: 180,
        marginBottom: 15
    },
    divider:{
        marginTop: 10,
        height: 1,
        backgroundColor:'#DEDEDE',
        paddingBottom: 3
    },
    cardView: {
        paddingBottom: 5,
        marginTop: 5
    },
    comment: {
        marginBottom: 0,
        paddingBottom: 12,
        flex: 1
    },
    rating_comments: {
        marginTop: 5,
        marginBottom: 5
    },
})