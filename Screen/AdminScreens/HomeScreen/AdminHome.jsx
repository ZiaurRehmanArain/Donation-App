import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
// import { , } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function AdminHome() {
  let navigation = useNavigation()

  let handleAdd = () => {
    navigation.navigate('addcard')
  }
  let handleSeeDonation = () => {
    navigation.navigate('seedonation')
  }
  let handleReciverApproval = () => {
    navigation.navigate('receiverapproval')
  }



  return (


    <View style={styles.container} >

      <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>Admin Panel</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginButton} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleSeeDonation}>
          <Text style={styles.buttonText}>See Donation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleReciverApproval}>
          <Text style={styles.buttonText}>Reciever approval</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons:
  {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  loginButton: {
    backgroundColor: 'green', // Example background color
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    margin: 5

  },
})

export default AdminHome