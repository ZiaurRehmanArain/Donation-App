import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// import {}
import Icon1 from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';


let Setting = () => {
  let navigation = useNavigation()

  let Term = () => {

    navigation.navigate('Terms')
  }
  let Policy = () => {
    navigation.navigate('Policy')

  }
  let About = () => {
    navigation.navigate('About')

  }


  return (
    <View style={styles.container}>
      <View style={styles.username} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon1 name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: '20px', fontSize: 20, margin: '20px', }}>
          Setting
        </Text>

        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <TouchableOpacity onPress={Term} style={styles.buttonContainer}>
        <View style={styles.username} >
          <Text style={{ color: 'grey', fontSize: 20 }}>Term and condition</Text>
          <Icon name="chevron-right" color={'black'} size={20} />
        </View>
      </TouchableOpacity>




      <TouchableOpacity onPress={Policy} style={styles.buttonContainer}>
        <View style={styles.username} >
          <Text style={{ color: 'grey', fontSize: 20 }}>Policy and Privacy</Text>
          <Icon name="chevron-right" color={'black'} size={20} />
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={About} style={styles.buttonContainer}>
        <View style={styles.username} >
          <Text style={{ color: 'grey', fontSize: 20 }}>About</Text>
          <Icon name="chevron-right" color={'black'} size={20} />
        </View>
      </TouchableOpacity>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  username: {
    display: 'flex',
    paddingHorizontal: 10,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 20,
    width: '90%',
    // marginTop:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: '20px',
    fontSize: 44,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: 'grey',
    // marginTop:'20px'
    padding: 5
  },

  buttonContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default Setting