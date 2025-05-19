import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
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
    <SafeAreaView style={styles.container}>
      {/* Fashion Store */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          Snackbar.show({
            text: 'Site is under construction',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'OK',
              textColor: 'green',
              onPress: () => {
                /* Do something. */
              },
            },
          });
        }}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#38a3a5'}]}>
            <Text style={styles.fashionImageText}>Fashion Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Grocery Store */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('LocalHome')}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#c8b6ff'}]}>
            <Text style={styles.localShopStore}>Grocery Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Restaurant Store */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          Snackbar.show({
            text: 'Site is under construction',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              text: 'OK',
              textColor: 'green',
              onPress: () => {
                /* Do something. */
              },
            },
          });
        }}>
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
          }}>
          <View
            style={[styles.imageTextContainer, {backgroundColor: '#e63946'}]}>
            <Text style={styles.restaurantStore}>Restaurant Store</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StoreSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fashionImageText: {
    fontSize: 30,
    color: 'white',
  },
  localShopStore: {
    fontSize: 30,
    color: 'white',
  },
  restaurantStore: {
    fontSize: 30,
    color: 'white',
  },
  imageContainer: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    padding: 10,
  },
});
