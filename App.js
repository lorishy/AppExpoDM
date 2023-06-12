import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import PanierScreen from './Screens/Panier';
import SettingsScreen from './Screens/Settings';
import CounterScreen from './Screens/Counter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Compteur' component={CounterScreen}></Stack.Screen>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='Register' component={RegisterScreen}></Stack.Screen>
        <Stack.Screen name='Panier' component={PanierScreen}></Stack.Screen>
        <Stack.Screen name='Reglages' component={SettingsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

