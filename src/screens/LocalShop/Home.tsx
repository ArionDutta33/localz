import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        }}>
        <View style={[styles.imageTextContainer, {backgroundColor: '#38a3a5'}]}>
          <Text style={styles.fashionImageText}>Fashion Store</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D',
        }}>
        <View style={[styles.imageTextContainer, {backgroundColor: '#c8b6ff'}]}>
          <Text style={styles.localShopStore}>Grocery Store</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
        }}>
        <View style={[styles.imageTextContainer, {backgroundColor: '#e63946'}]}>
          <Text style={styles.restaurantStore}>Restaurant Store</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
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
    // height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    padding: 10,
  },
});
