import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
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
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <Text>chck</Text>
        </View>
      </Modal>
      <View style={styles.searchBar}>
        <TouchableOpacity
          onPress={() => {
            console.log('Modal pressed');
            setModalVisible(!modalVisible);
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
          {/* <FontAwesomeIcon icon={faSearch} size={18} /> */}
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>
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
    marginVertical: 10,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'green',
    paddingHorizontal: 12,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#fb8500',
    // padding: 6,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    borderRadius: 999,
  },
  searchTextContainer: {
    // backgroundColor: 'blue',
    // paddingHorizontal: 12,
    // paddingVertical: 12,
    // borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#fb8500',
  },
  searchText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 'auto',
  },
});
