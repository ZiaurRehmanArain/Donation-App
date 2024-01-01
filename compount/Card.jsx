import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Card = ({ imageSource, title, description, rating }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.rating}>{`Rating: ${rating}`}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon1 name="like1" size={20} color="black" style={styles.icon} />
        <Icon1 name="dislike1" size={20} color="black" style={styles.icon} />
        <Icon name="comments" size={20} color="black" style={styles.icon} />
        <Icon name="share-square" size={20} color="black" style={styles.icon} />
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={'handleLikePress'} style={styles.button}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={'handleSharePress'} style={styles.button}>
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={'handleCommentPress'} style={styles.button}>
          <Text>Comment</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    height: 200,
    width: '100%',
    // resizeMode: '',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'grey'
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: 'grey'
  },
  rating: {
    fontSize: 12,
    color: 'green',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    flex: 1,
    textAlign: 'center',

  },
});

export default Card;
