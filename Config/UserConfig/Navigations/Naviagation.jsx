// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../../Screen/UserScreens/splash_screen';
import LoginScreen from '../../../Screen/UserScreens/Login';
import SignUpScreen from '../../../Screen/UserScreens/SignUp';
import MainHome from '../../../Screen/UserScreens/HomeScreen/MainHome';
import Home from '../../../Screen/UserScreens/HomeScreen/Home';
import AdminHome from '../../../Screen/AdminScreens/HomeScreen/AdminHome';
import AdminMainHome from '../../../Screen/AdminScreens/HomeScreen/AdminMainHome';
import SeeDonation from '../../../Screen/AdminScreens/SeeDonation';
import ReceiverApproval from '../../../Screen/AdminScreens/ReceiverApproval';
import Addcard from '../../../Screen/AdminScreens/Addcard';
import Policy from '../../../Screen/UserScreens/Setting/Screen/Policy';
import Terms from '../../../Screen/UserScreens/Setting/Screen/Terms';
import About from '../../../Screen/UserScreens/Setting/Screen/About';


const Stack = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainHome" component={MainHome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="adminhome" component={AdminHome} options={{ headerShown: false }} />
        <Stack.Screen name="adminmainhome" component={AdminMainHome} options={{ headerShown: false }} />
        <Stack.Screen name="seedonation" component={SeeDonation} options={{ headerShown: false }} />
        <Stack.Screen name="receiverapproval" component={ReceiverApproval} options={{ headerShown: false }} />
        <Stack.Screen name="addcard" component={Addcard} options={{ headerShown: false }} />
        <Stack.Screen name="Policy" component={Policy} options={{ headerShown: false }} />
        <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
