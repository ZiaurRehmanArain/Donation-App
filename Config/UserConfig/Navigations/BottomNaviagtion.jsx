import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Donate from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../../Screen/UserScreens/HomeScreen';
import ProfileScreen from '../../../Screen/UserScreens/Profile';
import GetHelp from '../../../Screen/UserScreens/mainPageDonationReciver';
import VideoView from '../../../Screen/UserScreens/VideoView';
import Setting from '../../../Screen/UserScreens/Setting/Setting';



const Tab = createBottomTabNavigator();



function MyTabs() {
  return (
    <Tab.Navigator

    >
      <Tab.Screen name={'Home'} component={HomeScreen} options={{
        headerShown: false,
        tabBarLabel: 'Home',

        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />

        ),

      }} />
      <Tab.Screen name={'VideoView'} component={VideoView} options={{
        headerShown: false,
        tabBarLabel: 'Video',
        tabBarActiveTintColor: 'green',

        tabBarInactiveTintColor: 'gray',

        // tabBarInactiveBackgroundColor:'lightgreen',
        tabBarIcon: ({ color, size }) => (
          <Icon4 name="video" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name={'Get Help'} component={GetHelp} options={{
        headerShown: false,
        tabBarLabel: 'Get Help',
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => (
          <Donate name="plus-circle" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name={'Setting'} component={Setting} options={{
        headerShown: false,
        tabBarVisible: false,
        tabBarLabel: 'Setting',
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarAllowFontScaling: true,
        tabBarIcon: ({ color, size }) => (
          <Icon3 name="setting" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="profile" component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'user',
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs