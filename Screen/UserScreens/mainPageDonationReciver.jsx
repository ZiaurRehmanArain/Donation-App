import React, { useState } from 'react'
import { Text, StyleSheet, ScrollView, View, ImageBackground, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Donation from './Donation';
import Receiver from './Receiver';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import ApproveList from './ApproveList';
import RejectList from './RejectList';
import DonationList from './DonationList';



function GetHelp({ navigation }) {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Donation', value: 'Donation' },
    { label: 'Reciever', value: 'Reciever' },

    { label: 'Approve List', value: 'Approve List' },
    { label: 'Reject List', value: 'Reject List' },
    { label: 'Donation List', value: 'Donation List' },

  ]);

  return (
    <>
      {/* <Text>mainPageDonationReciver</Text> */}
      <View style={styles.username} >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon1 name="menu" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ color: 'grey', fontSize: 30, fontWeight: 'bold', marginTop: '20px', fontSize: 20, margin: '20px', }}>Get Help</Text>
        {/* <Icon name="search1" size={25} color="black" /> */}
        <Icon name="setting" size={25} color="black" />
      </View>
      <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/80/71/92/360_F_80719252_vpsARcdNXBjLvYmnzsQq6WNWRXJ1tmAf.jpg' }} style={styles.backgroundImage}>

        {/* <ScrollView style={styles.scroll}> */}
        <View style={{ padding: 16, height: '200px', marginTop: '100px' }}>
          <Text>Select an option:</Text>
          <DropDownPicker
            style={{ color: 'grey' }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />


          {/* <Text>Selected Value: {value}</Text> */}
        </View>

        {value == 'Donation' ?
          <Donation></Donation>

          : value == 'Reciever' ?
            <Receiver /> : value == 'Approve List' ?
              <ApproveList /> : value == 'Reject List' ?
                <RejectList /> : value == 'Donation List' ?
                  <DonationList />
                  :
                  <></>
        }


        {/* </ScrollView> */}
      </ImageBackground>

    </>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
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

})

export default GetHelp