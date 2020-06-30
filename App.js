import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './constants/Firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DetailScreen from './screens/DetailScreen';
import RatingScreen from './screens/RatingScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    const db = Firebase.database();
    db.ref('/test/').set({
    })
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Mensarific' }}
          />
          <Stack.Screen 
            name="Menu"
            component={MenuScreen}
            options={{title:'Menu'}}
          />
          <Stack.Screen 
            name="Detail"
            component={DetailScreen}
            options={{title:'Detail'}}
          />
          <Stack.Screen 
            name="Rating"
            component={RatingScreen}
            options={{title:'Rating'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383F4A',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 
