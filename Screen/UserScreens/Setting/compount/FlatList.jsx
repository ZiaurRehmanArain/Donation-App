// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
const MyFlatList = () => {
  // Dummy data for demonstration
  const data1 = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // Add more items as needed
  ];

  const [data, setData] = useState(null);


  useEffect(async () => {
    // Reference to your Firebase Realtime Database
    const dbRef = database().ref('ImagesPost/');

    // Subscribe to real-time updates
    const onValueChange = await dbRef.on('value', (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
      // console.log(data)
    });

    // Unsubscribe when the component unmounts
    return () => dbRef.off('value', onValueChange);
  }, []);

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data1}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default MyFlatList;
