import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import CardList from '../../compount/CardList'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
function RejectList() {

  const [approvedData, setApprovedData] = useState([]);
  const [approvedDatastatus, setApprovedDatastatus] = useState(false);

  let currentuser = auth().currentUser.uid

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore()
          .collection('Receiver') // Replace 'yourCollection' with your actual Firestore collection name
          .where('status', '==', 'reject')
          .where('userid', '==', currentuser.toString())
          .get();

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(currentuser)
        setApprovedDatastatus(true)
        setApprovedData(data);
        // console.log(approvedData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [approvedDatastatus]);
  return (<View View style={{ flex: 1 }}>
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>Reject List</Text>
    </View>
    {/* 
    <CardList
  name="John Doe"
  cnic="12345-6789012-3"
  category="Example Category"
  categoryDetail="Example Detail"
  status="Active"
/> */}

    {approvedDatastatus ? (
      <FlatList
        data={approvedData}
        keyExtractor={(item) => (item.id).toString()}
        renderItem={({ item }) => (
          <CardList
            name={item.name}
            cnic={item.cnic}
            category={item.cetagory}
            categoryDetail={item.cetagoryDeial}
            status={item.status}
            Phone={item.phoneNumber}
          />
        )}
      />
    ) : (
      <Text>Loading...</Text>
    )}


  </View>
  )
}

export default RejectList