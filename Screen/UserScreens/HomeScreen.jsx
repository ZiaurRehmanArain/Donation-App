// import React from 'react'
import React, { useEffect, useState } from 'react';
import ImageSlider from '../../compount/Slider';
import Card from '../../compount/Card';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';


import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
// import { useNavigation } from '@react-navigation/native'


function HomeScreen({ navigation }) {
  const images = [
    'https://i0.wp.com/theazb.com/wp-content/uploads/2022/10/Saylani-Welfare.jpg?fit=1005%2C552&quality=100&strip=all&ssl=1',
    'https://c8.alamy.com/comp/C57MY0/a-large-number-of-people-gather-at-vehicle-saylani-welfare-trust-as-C57MY0.jpg',
    'https://media.licdn.com/dms/image/C5612AQHvVhsAbIRSIw/article-cover_image-shrink_720_1280/0/1520150907695?e=1709164800&v=beta&t=XQDvwyfYgQhkQOGBEOi2kzZ355milxLTSQa5YXv0_2s',

  ];



  const [data, setData] = useState(null);
  const [dataStatus, setDataStatus] = useState(false)

  useEffect(() => {
    // Reference to your Firebase Realtime Database
    const dbRef = database().ref('ImagesPost/');

    // Subscribe to real-time updates
    const onValueChange = dbRef.on('value', (snapshot) => {
      const newData = snapshot.val();
      setData(Object.values(newData));
      // console.log(data)
      setDataStatus(true)
    });

    // Unsubscribe when the component unmounts
    return () => dbRef.off('value', onValueChange);
  }, [dataStatus]);


  const handleLogout = async () => {
    try {
      await auth().signOut();
      // Navigate to the login or authentication screen
      navigation.navigate('loginScreen'); // Change 'Auth' to the name of your authentication screen
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <>



      <View style={styles.username} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon1 name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: '20px', fontSize: 20, margin: '20px', }}>Home</Text>
        <Icon name="search1" size={25} color="black" />
        <TouchableOpacity onPress={() => handleLogout()}>

          <Icon3 name="logout" size={25} color="black" />
        </TouchableOpacity>
      </View>

      {/* <Button onPress={()=>navigation.openDrawer()}>Screen1</Button> */}
      <View>
        <ImageSlider />

      </View>
      {/* <SearchComponent /> */}
      {/* <Card
        imageSource="https://media.istockphoto.com/id/1645602428/photo/perfect-light-purple-and-pink-dahlia-enlarged-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=3bshkw2BCsNg2Outrf4H5xC9mYbB9PmiKfjYb858H2w="
        title="Sample Card"
        description="This is a sample card description."
        rating={4.5}
      /> */}

      {dataStatus ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              imageSource={item.image.toString()}
              title={item.title}
              description={item.description}
              rating={4.5}
            />
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}

    </>
  )
}

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
})

export default HomeScreen