import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
const LocalHome = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.searchBar}>
        <FontAwesomeIcon icon={faLocationDot} />
      </View>
    </SafeAreaView>
  );
};

export default LocalHome;
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  searchBar: {},
});
