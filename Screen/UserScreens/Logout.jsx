import React, { useEffect } from 'react'
import { Text } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Logout() {
    let navigation = useNavigation()

    useEffect(async () => {
        // Add any necessary cleanup or side-effect logic here
        // return () => {
        //   // Cleanup logic, if needed
        // };


        try {
            await auth().signOut();
            navigation.replace('loginScreen')
            // You can add additional logic here after successful logout
            // Alert.alert('Logout', 'Successfully logged out');
        } catch (error) {
            console.error('Logout error:', error.message);
            // Alert.alert('Error', 'An error occurred while logging out');
        }
    }, []);
    return (
        <></>
    )
}

export default Logout