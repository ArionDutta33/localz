import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BacardiScreen() {
  return (
    <View style={styles.container}>
      {/* Header with time */}
      <View style={styles.header}>
        <Text style={styles.timeText}>9:41</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="search here"
          placeholderTextColor="#A0A0A0"
        />
      </View>

      {/* Frame 1 - Product highlight */}
      <View style={styles.productHighlight}>
        <Text style={styles.productTitle}>BACARDI....</Text>
        <Text style={styles.productSubtitle}>made from</Text>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>shop now</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.saveText}>Save product</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Frame 3 - Simple text */}
      <View>
        <Text style={styles.productTitle}>BACARDI....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16151D',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  searchBarContainer: {
    marginBottom: 32,
  },
  searchInput: {
    backgroundColor: '#2A2930',
    color: '#FFFFFF',
    borderRadius: 9999, // large number for full rounded
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  productHighlight: {
    marginBottom: 32,
  },
  productTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productSubtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopNowButton: {
    backgroundColor: '#D5EF74',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  shopNowText: {
    color: '#16151D',
    fontWeight: 'bold',
  },
  saveText: {
    color: '#D5EF74',
  },
});
