import React, { useState, useEffect } from 'react'
import Card from '../../compount/Card'
import SearchComponent from '../../compount/SearchCompount'
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import VideoCard from '../../compount/VideoCard';


function VideoView({ navigation }) {


  const [data, setData] = useState(null);
  const [dataStatus, setDataStatus] = useState(false)

  useEffect(() => {
    // Reference to your Firebase Realtime Database
    const dbRef = database().ref('VideoPost/');

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
  return (

    <>



      <View style={styles.username} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon1 name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: '20px', fontSize: 20, margin: '20px', }}>Video</Text>
        <Icon name="search1" size={25} color="black" />
        <Icon name="setting" size={25} color="black" />
      </View>
      {/* <Button onPress={()=>navigation.openDrawer()}>Screen1</Button> */}
      {/* <ImageSlider /> */}
      {/* <SearchComponent /> */}
      {/* <Card
        imageSource="https://media.istockphoto.com/id/1645602428/photo/perfect-light-purple-and-pink-dahlia-enlarged-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=3bshkw2BCsNg2Outrf4H5xC9mYbB9PmiKfjYb858H2w="
        title="Sample Card"
        description="This is a sample card description."
        rating={4.5}
      /> */}
      {/* <VideoCard

VideoSource="k6ebXnSbulw"
title="Sample Card"
description="This is a sample card description."
rating={4.5}/> */}

      {dataStatus ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <VideoCard
              VideoSource={item.videoUrl.toString()}
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
export default VideoView