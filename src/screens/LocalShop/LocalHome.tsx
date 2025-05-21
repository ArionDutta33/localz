import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import ShopCard from '../../components/ShopCard';
import {Marquee} from '@animatereactnative/marquee';

const LocalHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose Your Location</Text>

            <TouchableOpacity style={styles.locationBtn}>
              <Text style={styles.btnText}>Auto Detect My Location</Text>
            </TouchableOpacity>

            <View style={styles.locationList}>
              {['Guwahati', 'Jorhat', 'Dibrugarh', 'Tezpur'].map(
                (city, index) => (
                  <TouchableOpacity key={index} style={styles.locationItem}>
                    <Text style={styles.locationText}>{city}</Text>
                  </TouchableOpacity>
                ),
              )}
            </View>

            <TouchableOpacity
              style={[styles.locationBtn, {backgroundColor: '#ccc'}]}
              onPress={() => setModalVisible(false)}>
              <Text style={[styles.btnText, {color: '#333'}]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.searchBar}>
        <TouchableOpacity
          onPress={() => {
            console.log('Modal pressed');
            setModalVisible(true);
          }}
          style={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} color="white" size={14} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for stores"
          placeholderTextColor={'#6c757d'}
          style={styles.textInput}
        />
        <View style={styles.searchTextContainer}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
      <View style={styles.label}>
        <Marquee spacing={20} speed={1}>
          <Text>Powered by AnimateReactNative.com</Text>
        </Marquee>
      </View>
      <View style={styles.adContainer}>
        <ImageBackground
          style={styles.adImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1739444929269-341792e2a4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNob2VzJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D',
          }}>
          <View style={styles.overlay}>
            <Text style={styles.overlayTextOne}>TODAY ONLY</Text>
            <Text style={styles.overlayTextTwo}>80% OFF</Text>
            <Text style={styles.overlayTextTwo}>
              WITH CODE:{' '}
              <Text
                style={{
                  color: '#fb8500',
                }}>
                SHOP435{' '}
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text>chck</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocalHome;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#E2DAC5',
  },
  searchBar: {
    marginHorizontal: 14,
    marginTop: 10,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 12,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#fb8500',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    borderRadius: 999,
  },
  searchTextContainer: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fb8500',
  },
  searchText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  locationBtn: {
    backgroundColor: '#fb8500',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
  },
  locationList: {
    width: '100%',
    marginVertical: 10,
  },
  locationItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  adContainer: {
    width: 342,
    alignSelf: 'center',
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  adImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // centers overlay text vertically
    alignItems: 'center', // centers overlay text horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // dark transparent overlay
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 10,
  },
  overlayTextOne: {
    borderWidth: 2,
    // borderColor: 'red',
    // margin: 10,
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  overlayTextTwo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    // backgroundColor: 'red',
    marginHorizontal: 20,
  },
  label: {
    backgroundColor: '#fb8500',
  },
});
