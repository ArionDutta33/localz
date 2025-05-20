import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation-types';

const {width, height} = Dimensions.get('window');

const circleImages = [
  {id: 1, uri: 'https://i.pravatar.cc/100?img=1', size: 90, top: 40, left: 30},
  {
    id: 2,
    uri: 'https://i.pravatar.cc/100?img=2',
    size: 70,
    top: 120,
    left: 140,
  },
  {
    id: 3,
    uri: 'https://i.pravatar.cc/100?img=3',
    size: 100,
    top: 220,
    left: 50,
  },
  {
    id: 4,
    uri: 'https://i.pravatar.cc/100?img=4',
    size: 80,
    top: 300,
    left: 200,
  },
  {
    id: 5,
    uri: 'https://i.pravatar.cc/100?img=5',
    size: 70,
    top: 100,
    left: 250,
  },
  {
    id: 6,
    uri: 'https://i.pravatar.cc/100?img=6',
    size: 60,
    top: 350,
    left: 120,
  },
];

type GettingStartedScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'GettingStarted'
>;
const GettingStartedScreen = () => {
  const navigate = useNavigation<GettingStartedScreenProp>();
  return (
    // <SafeAreaView style={styles.safeArea}>
    <LinearGradient style={styles.container} colors={['#7F55B1', '#def2f1']}>
      {/* Circle Images Overlay */}
      <View style={styles.circlesContainer}>
        {circleImages.map(image => (
          <View
            key={image.id}
            style={[
              styles.circle,
              {
                width: image.size,
                height: image.size,
                borderRadius: image.size / 2,
                top: image.top,
                left: image.left,
              },
            ]}>
            <Image
              source={{uri: image.uri}}
              style={styles.circleImage}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Where Trends Live and{' '}
          <Text style={styles.subText}>Hype Thrives.</Text>
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Discover the latest in popculture, lifestyle trends, and viral
          moments— all in one place. Join the community that's always ahead of
          the curve
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate.replace('StoreSelect')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default GettingStartedScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative', // to contain absolute children
  },
  circlesContainer: {
    position: 'absolute',
    width: width,
    height: height * 0.8, // Increased height to fill more vertical space
    zIndex: 10,
  },
  circle: {
    position: 'absolute',
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  textContainer: {
    marginTop: 'auto',
    paddingHorizontal: 40,
  },
  mainText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 10,
  },
  subText: {
    fontStyle: 'italic',
    color: '#f15bb5',
  },
  descriptionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Poppins-Medium',
    lineHeight: 20,
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#f15bb5',
    padding: 15,
    borderRadius: 9999,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});
