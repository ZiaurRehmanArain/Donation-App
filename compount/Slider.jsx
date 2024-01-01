// YourScreen.js

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
const ImageSlider = () => {
  const images = [
    'https://i0.wp.com/theazb.com/wp-content/uploads/2022/10/Saylani-Welfare.jpg?fit=1005%2C552&quality=100&strip=all&ssl=1',
    'https://c8.alamy.com/comp/C57MY0/a-large-number-of-people-gather-at-vehicle-saylani-welfare-trust-as-C57MY0.jpg',
    'https://media.licdn.com/dms/image/C5612AQHvVhsAbIRSIw/article-cover_image-shrink_720_1280/0/1520150907695?e=1709164800&v=beta&t=XQDvwyfYgQhkQOGBEOi2kzZ355milxLTSQa5YXv0_2s',

    // Add more image URLs as needed
  ];


  const { height } = Dimensions.get('window');
  const sliderHeight = height * 0.3;

  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination={false} height={sliderHeight} autoplay={true}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: 200,

  },

  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',

  },
});

export default ImageSlider;



// import React from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';

// const { height } = Dimensions.get('window');
// const sliderHeight = height * 0.3;

// const ImageSlider = ({ images }) => {
//   return (
//     <Swiper style={styles.wrapper} showsButtons={true} height={sliderHeight}>
//       {images.map((image, index) => (
//         <View key={index} style={styles.slide}>
//           <Image style={styles.image} source={{ uri: image }} />
//         </View>
//       ))}
//     </Swiper>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default ImageSlider;
