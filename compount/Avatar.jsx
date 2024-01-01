import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CircleAvatar = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    borderRadius: 50, // Half of the width and height to create a circle
    overflow: 'hidden',
    borderWidth: 2, // You can customize the border width
    borderColor: 'white', // You can customize the border color
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default CircleAvatar;
