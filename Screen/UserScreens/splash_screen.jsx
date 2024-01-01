// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const fadeAnim = new Animated.Value(0);
  let navigation = useNavigation();

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Adjust the duration as needed
        useNativeDriver: true,
      }
    ).start(() => {
      // Navigate to the main screen after the animation
      navigation.replace('loginScreen'); // Replace with your main screen name
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={{ uri: 'https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=kozBU5g78u0AX_NHzYR&_nc_ht=scontent.fhdd2-1.fna&oh=00_AfCLKu6zo3o6rs7-E7vTTBTjbWS2pcfGZW_W6vVWmC6utw&oe=6596C6F6' }} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Saylani Donation App</Text>
        {/* Add any other splash screen content here */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set the background color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'green'
  },
  logo: {
    width: 200, // Set the width of the logo as needed
    height: 200, // Set the height of the logo as needed
  },
});

export default SplashScreen;
