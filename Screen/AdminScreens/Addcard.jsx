



import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CircleAvatar from '../../compount/Avatar';

const Addcard = () => {
  let navigation = useNavigation()
  const [postTitle, setpostTitle] = useState('');
  const [postDescription, setpostDescription] = useState('');
  // const [showpassword, setshowpassword] = useState(true)


  const handlePost = () => {


    // You can perform authentication, API calls, etc. here
  };
  const handleSignUp = () => {
    // Implement your login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    navigation.navigate('signUp')
    // You can perform authentication, API calls, etc. here
  };

  return (
    <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/80/71/92/360_F_80719252_vpsARcdNXBjLvYmnzsQq6WNWRXJ1tmAf.jpg' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginBottom: 40 }}>Add card</Text>
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          onChangeText={(text) => setpostTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="post description"
          secureTextEntry

          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.Button} onPress={handlePost}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>

        </View>

        {/* <View style={styles.buttons}>
      <CircleAvatar imageUrl={'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836'} />
      <CircleAvatar imageUrl={'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836'} />
      <CircleAvatar imageUrl={'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836'} />

        </View> */}




      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

    color: 'white'
  },
  buttons:
  {
    display: 'flex',
    flexDirection: 'row',

  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    marginVertical: 20
  },
  input: {
    height: 40,
    width: '100%',
    // borderColor: 'gray',
    // borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    color: 'grey'
  },
  Button: {
    backgroundColor: 'green', // Example background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    margin: 5

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', // Example text color
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 200, // Set the width of the logo as needed
    height: 200, // Set the height of the logo as needed
  },
});

export default Addcard;
