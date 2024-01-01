




import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Text, Picker } from 'react-native-paper';
// import CircleAvatar from '../compount/Avatar';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';


const Donation = () => {
    let naviagtion = useNavigation()
    const [username, setUsername] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [cinic, setcinic] = useState('');
    const [amount, setammount] = useState('');
    const [cloth, setCloth] = useState('');
    const [food, setFood] = useState('');
    const [medical, setMedical] = useState('');
    // const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);




    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Amount', value: 'Amount' },
        { label: 'Cloth', value: 'Cloth' },
        { label: 'Food', value: 'Food' },
        { label: 'Medical', value: 'Medical' },
    ]);

    const [data, setData] = useState(null);
    const [dataStatus, setDataStatus] = useState(true);

    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
            try {
                const currentUserUid = auth().currentUser.uid;
                const userRef = await firestore().collection('users').doc(currentUserUid).get();
                const userData = userRef.data();

                // Update state or perform other actions with the response
                setData(userData);
                setUsername(userData?.name)
                setUserEmail(userData?.email)
                setcinic(userData?.cnic)
                setphone(userData?.phoneNumber)
                setaddress(userData?.address)
                setaddress
                setDataStatus(false);
                // console.log(userData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function immediately
        fetchData();
    }, []);

    const handleSubmit = async () => {
        // Implement your login logic here
        console.log('Userphone:', phone);
        console.log('username:', username);
        console.log('Password:', useremail);
        console.log('usercnic:', cinic);
        console.log('address:', address);


        let userid = auth().currentUser.uid;

        let key = firestore().collection('users').doc().id;
        let Data
        if (value == 'Amount') {

            Data = {
                name: username,
                phoneNumber: phone,
                cnic: cinic,
                cetagory: value,
                cetagoryDeial: amount,
                id: key,
                userid: userid
            }

        } else if (value == 'Food') {

            Data = {
                name: username,
                phoneNumber: phone,
                cnic: cinic,
                cetagory: value,
                cetagoryDeial: food,
                id: key,
                userid
            }
        } else if (value == 'Cloth') {

            Data = {
                name: username,
                phoneNumber: phone,
                cnic: cinic,
                cetagory: value,
                cetagoryDeial: cloth,
                id: key,
                userid
            }
        } else if (value == 'Medical') {

            Data = {
                name: username,
                phoneNumber: phone,
                cnic: cinic,
                cetagory: value,
                cetagoryDeial: medical,
                id: key,
                userid
            }
        }




        await firestore().collection('Donation').doc(key).set(Data)
            .then((data) => {
                console.log("add")
                Snackbar.show({
                    text: 'data add',
                    duration: Snackbar.LENGTH_SHORT,
                    margin: 20,
                    backgroundColor: "grey",
                    textColor: "white"
                });
            })
            .catch((err) => {
                // console.log(err)
                Snackbar.show({
                    text: err.toString(),
                    duration: Snackbar.LENGTH_SHORT,
                    margin: 20,
                    backgroundColor: "grey",
                    textColor: "white"
                });
            })



        // naviagtion.navigate('loginScreen')

        // You can perform authentication, API calls, etc. here
    };

    return (
        // <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/80/71/92/360_F_80719252_vpsARcdNXBjLvYmnzsQq6WNWRXJ1tmAf.jpg' }} style={styles.backgroundImage}>
        // <ScrollView style={styles.scroll}>
        <View style={styles.container}>
            {/* <Image source={{ uri: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836' }} style={styles.logo} resizeMode="contain" /> */}
            {/* <CircleAvatar imageUrl={'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836'} /> */}
            <Text style={styles.title}>Donation </Text>
            <TextInput
                value={username}
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setUsername(text)}
            />


            <TextInput
                value={useremail}
                style={styles.input}
                placeholder="Email"


                onChangeText={(text) => setUserEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Cnic Number"
                value={cinic}
                onChangeText={(text) => setcinic(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}


                onChangeText={(text) => setphone(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}


                onChangeText={(text) => setaddress(text)}
            />
            <View style={{ padding: 16 }}>
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
            {value == 'Amount' ?
                <TextInput
                    style={styles.input}
                    placeholder="Amount"

                    onChangeText={(text) => setammount(text)}
                /> : value == 'Cloth' ?
                    <TextInput
                        style={styles.input1}
                        placeholder="Cloth Detail"
                        onChangeText={(text) => setCloth(text)}
                    />

                    : value == 'Food' ?
                        <TextInput
                            style={styles.input1}
                            placeholder="Food Detial"
                            onChangeText={(text) => setFood(text)}
                        />
                        : value == 'Medical' ?
                            <TextInput
                                style={styles.input1}
                                multiline
                                placeholder="Medical Detail"
                                onChangeText={(text) => setMedical(text)}
                            /> : <></>


            }


            <View style={styles.buttons}>

                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
        // {/* </ScrollView> */}
        // </ImageBackground>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    container: {
        // marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

        color: 'white'
    },
    input1: {
        height: 40,
        borderRadius: 10,
        width: '100%',
        // borderColor: 'gray',
        // borderWidth: 1,
        marginBottom: 4,
        paddingLeft: 8,
        color: 'grey'
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
        color: 'grey'
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

export default Donation;
