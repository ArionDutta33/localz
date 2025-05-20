import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LocalHome = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchBar} />
    </SafeAreaView>
  );
};

export default LocalHome;
const styles = StyleSheet.create({
  searchBar: {},
});
