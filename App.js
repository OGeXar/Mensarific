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
    /*<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test"
            component={TestComponent}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer> */
      /* <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={TestComponent}
          options={{title: 'Home'}}
        />
        <Tab.Screen 
          name="Test"
          component={TestTwoComponent}
        />
      </Tab.Navigator>
      </NavigationContainer>*/
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 
