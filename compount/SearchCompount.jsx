import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper'


const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button
        buttonColor='green'
        contentStyle={{ height: 44 }}

        mode="contained" onPress={() => console.log('Pressed')}>
        Search
      </Button>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    // padding: 10,
    marginTop: 20,
    height: 20,
    color: 'grey',
  },
  input: {
    flex: 1,
    marginRight: 2,
    borderWidth: 1,
    color: 'grey',
    height: 40,
    borderColor: '#ccc',
    borderRadius: 5,
    // padding: 8,
  },

});

export default SearchComponent;
