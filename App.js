import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TestComponent } from './assets/AppComponents';
const Stack = createStackNavigator();
export default class App extends React.Component {
  constructor(props){
    super(props);
    if(!firebase.apps.length){
      firebase.initializeApp(ApiKeys.FirebaseConfig); 
    }
  }
  render() {
    const db = firebase.database();
    db.ref('/test/').set({
      user: 'test',
      kek: 'fuck yeah',
      Jens: 'wenn du das liest, bekommst n Bier ausgegeben von Flo!'
    })
    
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test"
            component={TestComponent}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 
