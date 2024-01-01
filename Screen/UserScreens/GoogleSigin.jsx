import React from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GoogleSignInButton = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signIn} />
    </View>
  );
};

export default GoogleSignInButton;
