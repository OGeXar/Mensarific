import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './constants/Firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TestComponent } from './assets/AppComponents';
import { TestTwoComponent } from './assets/AppComponents';
import TestScreen from './screens/TestScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    const db = Firebase.database();
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
            component={TestScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen 
            name="TestTwo"
            component={TestTwoComponent}
            options={{title:'hier kommt das Profil hin'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 
