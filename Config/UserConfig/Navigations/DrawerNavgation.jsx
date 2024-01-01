// AppDrawer.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContain';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../../Screen/UserScreens/HomeScreen/Home';
import Donation from '../../../Screen/UserScreens/Donation';
import ProfileScreen from '../../../Screen/UserScreens/Profile';
import DonationList from '../../../Screen/UserScreens/DonationList';
import ApproveList from '../../../Screen/UserScreens/ApproveList';
import RejectList from '../../../Screen/UserScreens/RejectList';
import Logout from '../../../Screen/UserScreens/Logout';
import Receiver from '../../../Screen/UserScreens/Receiver';



const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Home} options={{
        headerShown: false,
        drawerLabel: 'Home',
        drawerIcon: ({ focused, color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),
      }} />
      {/* <Drawer.Screen name="Donation" component={}options={{ headerShown: true }} /> */}
      <Drawer.Screen name="Donation" component={Donation} options={{ headerShown: true }} />
      <Drawer.Screen name="Receiver" component={Receiver} options={{ headerShown: true }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
      <Drawer.Screen name="DonationList" component={DonationList} options={{ headerShown: true }} />
      <Drawer.Screen name="ApproveList" component={ApproveList} options={{ headerShown: true }} />
      <Drawer.Screen name="RejectList" component={RejectList} options={{ headerShown: true }} />
      {/* <Drawer.Screen name="login" component={LoginScreen}options={{ headerShown: true }} />
      <Drawer.Screen name="login" component={LoginScreen}options={{ headerShown: true }} /> */}
    </Drawer.Navigator>
  );
}

export default AppDrawer;
