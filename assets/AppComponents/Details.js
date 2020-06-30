import React from 'react';
import { ActivityIndicator,StyleSheet,ScrollView,View, Text} from 'react-native';
import { Card, ListItem, Button, Icon, Image,Overlay,Divider  } from 'react-native-elements'
import Firebase from '../../constants/Firebase';
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
            let comments = null;
            return(
                <View>
                    <Image source = {{uri: this.state.detail.image}} style = {Styles.image}/>
                    <Text>{this.state.detail.description}</Text>
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
                    <Text>Bewertungen</Text>
                    <ScrollView>
                        {comments}
                    </ScrollView>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    image: {
        width: 300,
        height: 150
    },
    divider:{
        margin:10,
        height: 1,
        backgroundColor:'blue'
    }
})