import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CustomAppbar = ({ iconSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
      {/* <Image source={iconSources} style={styles.icon} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomAppbar;
