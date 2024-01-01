import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CircleAvatar from '../../compount/Avatar';
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
// import { RNCamera } from 'react-native-camera';
// import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ProgressBar from 'react-native-progress/Bar';
import storage from '@react-native-firebase/storage';


const SignUpScreen = () => {
    let naviagtion = useNavigation()
    const [username, setUsername] = useState('');
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [useremail, setUserEmail] = useState('');
    const [profileImage, setprofileImage] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [password, setPassword] = useState('');
    const [cinic, setcinic] = useState('');
    const [Confrimpassword, setConfrimPassword] = useState('');
    const [file, setfile] = useState();
    const [showprogress, setshowprogress] = useState(false)
    const [uploadProgress, setUploadProgress] = useState(0);

    //   const [showpassword, setshowpassword] = useState(true)

    let handleSignUp = async () => {
        console.log('Userphone:', phone);
        console.log('username:', username);
        console.log('username:', username);
        console.log('Password:', useremail);
        console.log('usercnic:', cinic);
        console.log('address:', address);
        console.log('Password:', password);
        console.log('confirm password:', Confrimpassword);


        if (username == '') {
            Snackbar.show({
                text: 'must be enter email',
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });

        } else if (useremail == '') {
            Snackbar.show({
                text: 'must Enter password',
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });

        } else if (cinic == '') {
            Snackbar.show({
                text: 'must enter cnic number',
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });
        } else if (address == '') {
            Snackbar.show({
                text: 'must enter address',
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });

        } else if (phone == '') {
            Snackbar.show({
                text: 'must be enter phone',
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });

        } else {
            if (password == Confrimpassword) {


                await auth()
                    .createUserWithEmailAndPassword(useremail, password)
                    .then(async (user) => {
                        // const dbRef = database().ref('example');

                        // // Push data with a unique key
                        // const UserKey = dbRef.push();

                        // let key = firestore().collection('users').doc().id;
                        let userData = {
                            name: username,
                            email: useremail,
                            address: address,
                            phoneNumber: phone,
                            cnic: cinic,
                            profileImage,
                            uid: user.user.uid
                        }


                        await firestore().collection('users').doc(user.user.uid).set(userData)
                            .then((data) => {
                                console.log("user add")
                            })
                            .catch((err) => {
                                // console.log(err)
                                Snackbar.show({
                                    text: err,
                                    duration: Snackbar.LENGTH_SHORT,
                                    margin: 20,
                                    backgroundColor: "grey",
                                    textColor: "white"
                                });
                            })



                        // console.log('User account created & signed in!');
                        naviagtion.navigate('loginScreen')

                    })
                    .catch(error => {
                        if (error.code === 'auth/email-already-in-use') {
                            //   console.log('That email address is already in use!');
                            Snackbar.show({
                                text: 'That email address is already in use!',
                                duration: Snackbar.LENGTH_SHORT,
                                margin: 20,
                                backgroundColor: "grey",
                                textColor: "white"
                            });
                        }

                        if (error.code === 'auth/invalid-email') {
                            //   console.log('That email address is invalid!');
                            Snackbar.show({
                                text: 'That email address is invalid!',
                                duration: Snackbar.LENGTH_SHORT,
                                margin: 20,
                                backgroundColor: "grey",
                                textColor: "white"
                            });
                        }
                        Snackbar.show({
                            text: error.toString(),
                            duration: Snackbar.LENGTH_SHORT,
                            margin: 20,
                            backgroundColor: "grey",
                            textColor: "white"
                        });
                        // console.error(error);
                    });
            } else {
                // console.log("d'not match your password")
                Snackbar.show({
                    text: 'password or confrim password is not match',
                    duration: Snackbar.LENGTH_SHORT,
                    margin: 20,
                    backgroundColor: "grey",
                    textColor: "white"
                });
            }
        }



    }


    const handleLogin = () => {
        // Implement your login logic here

        naviagtion.navigate('loginScreen')

        // You can perform authentication, API calls, etc. here
    };



    const openCamera = () => {
        const options = {
            mediaType: 'photo',  // You can use 'photo' or 'video'
            quality: 0.8,       // Image quality (0 to 1)
        };
        launchCamera({}, (response) => {
            // Handle camera response here
            console.log('Camera response:', response);
            setBottomSheetVisible(false);
            if (response.didCancel) {
                // console.log('User cancelled the camera.');
                Snackbar.show({
                    text: 'User cancelled the camera.',
                    duration: Snackbar.LENGTH_SHORT,
                    margin: 20,
                    backgroundColor: "grey",
                    textColor: "white"
                });
            }
            else if (response.error) {
                Snackbar.show({
                    text: response.error.toString(),
                    duration: Snackbar.LENGTH_SHORT,
                    margin: 20,
                    backgroundColor: "grey",
                    textColor: "white"
                });
                console.log('Camera Error: ', response.error);
            }
            else {
                // Use the image from the camera here
                console.log('Image URI: ', response.assets[0].uri);
                setfile(response.assets[0].uri)
                imageupload(response.assets[0].uri)

            }

        });
    };

    const openGallery = () => {
        const options = {
            mediaType: 'photo',  // You can use 'photo' or 'video'
            quality: 0.8,       // Image quality (0 to 1)
        };
        launchImageLibrary({}, (response) => {
            // Handle gallery response here
            console.log('Gallery response:', response);
            setBottomSheetVisible(false);

            if (response.didCancel) {
                console.log('User cancelled the camera.');
            }
            else if (response.error) {
                console.log('Camera Error: ', response.error);
            }
            else {
                // Use the image from the camera here
                console.log('Image URI: ', response.assets[0].uri);
                setfile(response.assets[0].uri)
                setshowprogress(true)
                imageupload(response.assets[0].uri)

            }
        });
    };


    const imageupload = (imageurl) => {
        const reference = storage().ref('images/' + new Date().getTime() + '.jpg');
        try {
            const uploadTask = reference.putFile(imageurl);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress)


                },
                (error) => {
                    // console.error('Error uploading image: ', error); 
                    Snackbar.show({
                        text: error.toString(),
                        duration: Snackbar.LENGTH_SHORT,
                        margin: 20,
                        backgroundColor: "grey",
                        textColor: "white"
                    });
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        const img_url = downloadURL;
                        setshowprogress(false)

                        // console.log('File available at', downloadURL);
                        setprofileImage(downloadURL)

                    });
                }
            );
        } catch (error) {
            // console.error('Error uploading image: ', error);
            Snackbar.show({
                text: error.toString(),
                duration: Snackbar.LENGTH_SHORT,
                margin: 20,
                backgroundColor: "grey",
                textColor: "white"
            });
        }
    }

    return (
        <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/80/71/92/360_F_80719252_vpsARcdNXBjLvYmnzsQq6WNWRXJ1tmAf.jpg' }} style={styles.backgroundImage}>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    {/* <Image source={{ uri: 'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=9u4ZscMSI8AAX-IQ7R8&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfC1HBQkC4yH6UTkbIEPkVYaJJCTSMKMuLwwVkCJrD_sgQ&oe=6590D836' }} style={styles.logo} resizeMode="contain" /> */}
                    <CircleAvatar imageUrl={'https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/336571291_755643742725254_630854305092692131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGYi60N900O9rGZAttMqoM-WLrwB_dZMRpYuvAH91kxGu_MKGs4PNCjXDLZETJrwW073AGDuguu7l2H6KIGv817&_nc_ohc=kozBU5g78u0AX_NHzYR&_nc_ht=scontent.fhdd2-1.fna&oh=00_AfCLKu6zo3o6rs7-E7vTTBTjbWS2pcfGZW_W6vVWmC6utw&oe=6596C6F6'} />
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        style={styles.input}


                        placeholder="Name"
                        onChangeText={(text) => setUsername(text)}
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Email"

                        left={<TextInput.Icon icon="email" color={"black"} />}

                        onChangeText={(text) => setUserEmail(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Cnic Number"


                        onChangeText={(text) => setcinic(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"

                        left={<TextInput.Icon icon="phone" color={"black"} />}
                        onChangeText={(text) => setphone(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        left={<TextInput.Icon icon="address" color={"black"} />}


                        onChangeText={(text) => setaddress(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        left={<TextInput.Icon icon="lock" color={"black"} />}

                        onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="confrim Password"
                        left={<TextInput.Icon icon="lock" color={"black"} />}

                        secureTextEntry


                        onChangeText={(text) => setConfrimPassword(text)}
                    />
                    {/* {
                        showprogress ?
                            <ProgressBar
                                progress={uploadProgress / 100}
                                width={330}
                                height={20}
                                color={'#007AFF'}
                                style={{ margin: 20 }}
                            />

                            :
                            null
                    } */}


                    {
                        showprogress ?
                            <ProgressBar
                                progress={uploadProgress / 100}
                                width={330}
                                height={20}
                                color={'#007AFF'}
                                style={{ margin: 20 }}
                            />

                            :
                            null
                    }

                    <TouchableOpacity style={styles.getimage} onPress={() => setBottomSheetVisible(true)}>
                        <Text style={styles.buttonText}>Get Image</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isBottomSheetVisible} onBackdropPress={() => setBottomSheetVisible(false)}>
                        <View style={styles.bottomSheet}>
                            <TouchableOpacity style={styles.button} onPress={openCamera}>
                                <Text style={styles.buttonText}>Open Camera</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={openGallery}>
                                <Text style={styles.buttonText}>Open Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>




                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    container: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

        color: 'white'
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
        marginVertical: 20,
    },
    input: {
        height: 40,
        width: '100%',
        // borderColor: 'gray',
        // borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        color: 'white',

    },
    loginButton: {
        backgroundColor: 'green', // Example background color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        margin: 5,
        // color:'white'

    },

    getimage: {
        backgroundColor: 'lightgrey', // Example background color
        paddingVertical: 12,
        width: '100%',
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
        color:'white', // Example text color
        fontSize: 16,
        textAlign: 'center',
    },
    logo: {
        width: 200, // Set the width of the logo as needed
        height: 200, // Set the height of the logo as needed
    },
    buttonText: {
        fontSize: 18,
        color: 'blue',
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 16,
    },
    button: {
        padding: 12,
        marginBottom: 16,
        backgroundColor: 'lightgray',
        alignItems: 'bottom',
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
});

export default SignUpScreen;
