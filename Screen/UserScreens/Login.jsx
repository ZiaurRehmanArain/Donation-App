import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CircleAvatar from '../../compount/Avatar';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';


const LoginScreen = () => {
  let navigation = useNavigation()
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [showpassword, setshowpassword] = useState(true)


  const handleLogin = async () => {
    // Implement your login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);


    if (userEmail == '') {
      Snackbar.show({
        text: 'Please enter email',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: "grey",
        textColor: "white"
      });
    } else if (password == "") {
      Snackbar.show({
        text: 'please enter password',
        duration: Snackbar.LENGTH_SHORT,
        margin: 20,
        backgroundColor: "grey",
        textColor: "white"
      });

    } else {
      await auth()
        .signInWithEmailAndPassword(userEmail, password)
        .then(() => {


          setUserEmail('')
          setPassword('')
          // console.log('User account created & signed in!');
          if (userEmail == 'admin@gmail.com') {
            navigation.navigate('adminhome')

          } else {
            navigation.navigate('MainHome')

          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {

            Snackbar.show({
              text: 'That email address is already in use!',
              duration: Snackbar.LENGTH_SHORT,
              margin: 20,
              backgroundColor: "grey",
              textColor: "white"
            });
            // console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {

            Snackbar.show({
              text: 'That email address is invalid!',
              duration: Snackbar.LENGTH_SHORT,
              margin: 20,
              backgroundColor: "grey",
              textColor: "white"
            });
            // console.log('That email address is invalid!');
          }

          Snackbar.show({
            text: error.toString(),
            duration: Snackbar.LENGTH_SHORT,
            margin: 20,
            backgroundColor: "grey",
            textColor: "white"
          });
          // console.error(error);
        });




    }




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
        {/* <Image source={{ uri: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836' }} style={styles.logo} resizeMode="contain" /> */}
        <CircleAvatar imageUrl={'https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=kozBU5g78u0AX_NHzYR&_nc_ht=scontent.fhdd2-1.fna&oh=00_AfCLKu6zo3o6rs7-E7vTTBTjbWS2pcfGZW_W6vVWmC6utw&oe=6596C6F6'} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          value={userEmail}
          style={styles.input}
          placeholder="Email"
          left={<TextInput.Icon icon="email" color={"black"} />}


          onChangeText={(text) => setUserEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          left={<TextInput.Icon icon="lock" color={"black"} />}

          value={password}

          onChangeText={(text) => setPassword(text)}
        />
        <Text style={{ display: 'flex', width: '100%', position: 'relative', right: -220, color: 'blue', margin: 10 }}>Forget Password? </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
    color: 'white',
    height: 50,
    border: '2px solid gray'
  },
  loginButton: {
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

export default LoginScreen;
