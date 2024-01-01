import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import database from '@react-native-firebase/database';


function About() {

  const [data, setData] = useState('Loading ...');
  const [dataStatus, setDataStatus] = useState(false)

  useEffect(() => {
    // Reference to your Firebase Realtime Database
    const dbRef = database().ref('About/Aboutdata/');

    // Subscribe to real-time updates
    const onValueChange = dbRef.on('value', (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
      console.log(data)
      setDataStatus(true)
    });

    // Unsubscribe when the component unmounts
    return () => dbRef.off('value', onValueChange);
  }, [dataStatus]);
  return (<>

    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'lightgray', padding: '20px', height: '10%', marginTop: '20px' }}><Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>About</Text></View>

      <View style={{ padding: 20 }}>

        <Text style={{ color: 'gray', padding: '20px' }}>{data.About}</Text>

      </View>

    </View>



  </>
  )
}

export default About