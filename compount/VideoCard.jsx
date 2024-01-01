import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import YoutubePlayer from 'react-native-youtube-iframe'

const VideoCard = ({ VideoSource, title, description, rating }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const videoId = 'YOUR_VIDEO_ID'; // Replace with your actual YouTube video ID

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <View style={styles.card}>
      {/* <Video
        source={{ uri: VideoSource }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
      /> */}

      <View>

        <YoutubePlayer
          height={200}
          play={isPlaying}
          videoId={VideoSource}
        />
        <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, textAlign: 'center', margin: 10, borderRadius: 10 }} onPress={togglePlay}><Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{isPlaying ? 'Pause' : 'Play'}</Text></TouchableOpacity>
      </View>

      {/* <Video 
    // Can be a URL or a local file.
    source={{uri:VideoSource}}
    // Store reference  
    ref={VideoRef}
    // Callback when remote video is buffering                                      
    onBuffer={onBuffer}
    // Callback when video cannot be loaded              
    onError={onError}               
    style={styles.backgroundVideo}
   /> */}


      {/* <Video source={{uri: VideoSource}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  video: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
});

export default VideoCard;
