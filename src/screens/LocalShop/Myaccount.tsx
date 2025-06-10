import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyAccount = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>My Account</Text>
          
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Icon name="person-outline" size={40} color="#fff" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInText}>Sign in / Join</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
       
          <View style={styles.statItem}>
            <Icon name="favorite-border" size={24} color="#000" />
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="local-offer" size={24} color="#000" />
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Coupons</Text>
          </View>
          
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          <MenuItem title="My Wishlist" icon="favorite-border" />
          <MenuItem title="My Coupons" icon="local-offer" />
          <MenuItem title="Create shop account" icon="person-outline" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support</Text>
          <MenuItem title="Customer Care" icon="headset-mic" />
          <MenuItem title="Invite Friends & Earn" subtitle="You get ₹100 SuperCash for every friend" icon="people" />
          <MenuItem title="Notifications" icon="notifications" />
          <MenuItem title="How To Return" icon="assignment-return" />
          <MenuItem title="How Do I Redeem My Coupon?" icon="card-giftcard" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <MenuItem title="Terms & Conditions" icon="description" />
          <MenuItem title="Promotions Terms & Conditions" icon="campaign" />
          <MenuItem title="Returns & Refunds Policy" icon="policy" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ title, subtitle, icon }: { title: string; subtitle?: string; icon: string }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuIconContainer}>
      <Icon name={icon} size={24} color="#000" />
    </View>
    <View style={styles.menuTextContainer}>
      <Text style={styles.menuTitle}>{title}</Text>
      {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
    </View>
    <Icon name="keyboard-arrow-right" size={24} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  settingsButton: {
    padding: 8,
  },
  profileSection: {
    backgroundColor: '#D5EF74',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  signInButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  signInText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginHorizontal: 16,
    backgroundColor: '#D5EF74',
    borderRadius: 12,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#000000',
    marginTop: 2,
  },
  menuSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 16,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  menuIconContainer: {
    width: 40,
    alignItems: 'center',
    backgroundColor: '#D5EF74',
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  menuTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  menuSubtitle: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
});

export default MyAccount;