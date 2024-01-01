// ProfileScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Icon1 from 'react-native-vector-icons/Entypo';




const ProfileScreen = ({ navigation }) => {

  const [data, setData] = useState(null);
  const [dataStatus, setdataStatus] = useState(true);


  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const currentUserUid = auth().currentUser.uid;
        const userRef = await firestore().collection('users').doc(currentUserUid).get();
        const userData = userRef.data();

        // Update state or perform other actions with the response
        setData(userData);
        setdataStatus(false);
        // console.log(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function immediately
    fetchData();
  }, []);


  return (
    <View style={styles.container}>

      <View style={styles.username} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon1 name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: '20px', fontSize: 20, margin: '20px', }}>Profile</Text>

        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <Image
        style={styles.profileImage}
        source={{ uri: dataStatus ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UZ0qXVSC1vW_vHchSdXG9f4sc_0dionw4DgRrZ-sdg&s' : data?.profileImage }} // Replace with your actual image URL
      />
      <View style={styles.username}>

        <Text style={{ color: 'grey', fontSize: 20, width: '100px', textAlign: 'left' }}>Name</Text>
        <Text style={{ color: 'grey', fontSize: 20 }}>{dataStatus ? 'Loading...' : data?.name}</Text>
      </View>
      <View style={styles.username}>

        <Text style={{ color: 'grey', fontSize: 20 }}>Email</Text>
        <Text style={{ color: 'grey', fontSize: 20 }}>{dataStatus ? 'Loading...' : data?.email}</Text>
      </View>
      <View style={styles.username}>

        <Text style={{ color: 'grey', fontSize: 20 }}>CNIC</Text>
        <Text style={{ color: 'grey', fontSize: 20 }}>{dataStatus ? 'Loading...' : data?.cnic}</Text>
      </View>
      <View style={styles.username}>

        <Text style={{ color: 'grey', fontSize: 20 }}>Phone Number</Text>
        <Text style={{ color: 'grey', fontSize: 20 }}>{dataStatus ? 'Loading...' : data?.phoneNumber}</Text>
      </View>
      <View style={styles.username}>

        <Text style={{ color: 'grey', fontSize: 20 }}>Address</Text>
        <Text style={{ color: 'grey', fontSize: 20 }}>{dataStatus ? 'Loading...' : data?.address}</Text>
      </View>

      {/* Add more profile information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    display: 'flex',
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    fontSize: 44,
    fontWeight: 'bold',
    // marginBottom: 10,
    color: 'grey'
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },
});

export default ProfileScreen;
