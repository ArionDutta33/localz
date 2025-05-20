import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation-types';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

type LocalHomeProps = NativeStackNavigationProp<
  RootStackParamList,
  'StoreSelect'
>;

const StoreSelect = () => {
  const navigation = useNavigation<LocalHomeProps>();

  return (
    <View style={styles.container}>
      {/* Fashion Store */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          Snackbar.show({
            text: 'Site is under construction',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'OK',
              textColor: 'green',
              onPress: () => {},
            },
          });
        }}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.imageWrapper}
          source={{
            uri: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#38a3a5'}]}>
            <Text style={styles.imageText}>Fashion Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Grocery Store */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('LocalHome')}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.imageWrapper}
          source={{
            uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#c8b6ff'}]}>
            <Text style={styles.imageText}>Grocery Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Restaurant Store */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          Snackbar.show({
            text: 'Site is under construction',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'OK',
              textColor: 'green',
              onPress: () => {},
            },
          });
        }}>
        <ImageBackground
          imageStyle={styles.imageBackground}
          style={styles.imageWrapper}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#e63946'}]}>
            <Text style={styles.imageText}>Restaurant Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default StoreSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  imageWrapper: {
    height: 200,
    borderRadius: 15,
    justifyContent: 'flex-end',
  },
  imageBackground: {
    borderRadius: 15,
  },
  imageTextContainer: {
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imageText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
