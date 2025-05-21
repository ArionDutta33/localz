import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBagShopping,
  faHeart,
  faLocationDot,
  faMapPin,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import ShopCard from '../../components/ShopCard';
import {Marquee} from '@animatereactnative/marquee';
import LinearGradient from 'react-native-linear-gradient';
import UseGetAllProducts from '../../hooks/use-get-all-products';
import {useNavigation} from '@react-navigation/native';
import {RootTabParamList} from '../../types/navigation-types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

const {width} = Dimensions.get('window');

const imageUrls = [
  'https://images.unsplash.com/photo-1638993606271-04836e75d662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
];

const THEME = {
  primary: '#D5EF74', // New accent color
  secondary: '#FFFFFF', // White text/icons
  background: '#15161D', // Dark background
  card: '#1E1F29', // Dark cards
  text: '#FFFFFF', // White text
  lightText: '#A0A0A0', // Gray text
  accent: '#D5EF74', // Same as primary
};
type LocalHomeProps = BottomTabNavigationProp<RootTabParamList, 'Home'>;
const LocalHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [location, setLocation] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation<LocalHomeProps>();
  const {products, loading, error} = UseGetAllProducts();
  const limitedProducts = products.slice(0, 6);
  if (loading) {
    <ActivityIndicator size={'large'} color={'black'} />;
  }

  const handleRedirect = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={THEME.background} barStyle="light-content" />

      {/* Location Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Choose Your Location</Text>

            <TouchableOpacity style={styles.locationBtn}>
              <FontAwesomeIcon
                icon={faLocationDot}
                color="#15161D"
                size={16}
                style={{marginRight: 8}}
              />
              <Text style={styles.btnText}>Auto Detect My Location</Text>
            </TouchableOpacity>

            <View style={styles.locationList}>
              {['Guwahati', 'Jorhat', 'Dibrugarh', 'Tezpur'].map(
                (city, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedIndex(index);
                      setLocation(city);
                    }}
                    key={index}
                    style={[
                      styles.locationItem,
                      //how to make this dynamic
                      index === selectedIndex && styles.activeLocation,
                    ]}>
                    <FontAwesomeIcon
                      icon={faMapPin}
                      color={
                        index === selectedIndex
                          ? THEME.primary
                          : THEME.lightText
                      }
                      size={14}
                      style={{marginRight: 10}}
                    />
                    <Text
                      style={[
                        styles.locationText,
                        index === selectedIndex && {
                          color: THEME.primary,
                          fontFamily: 'Poppins-SemiBold',
                        },
                      ]}>
                      {city}
                    </Text>
                  </TouchableOpacity>
                ),
              )}
            </View>

            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Top Navigation Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.locationSelector}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faMapPin} color={THEME.primary} size={18} />
          <Text style={styles.locationText}>{location}</Text>
          <View style={styles.locationDot} />
        </TouchableOpacity>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesomeIcon icon={faHeart} color={THEME.secondary} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesomeIcon
              icon={faBagShopping}
              color={THEME.secondary}
              size={20}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.iconContainer}>
          <FontAwesomeIcon icon={faLocationDot} color="#15161D" size={14} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faSearch}
            color={THEME.lightText}
            size={16}
            style={{marginRight: 8}}
          />
          <TextInput
            placeholder="Search for stores"
            placeholderTextColor={THEME.lightText}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={handleRedirect}
          style={styles.searchTextContainer}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Banner */}
      <View style={styles.label}>
        <Marquee spacing={20} speed={0.5}>
          <Text style={styles.labelText}>
            FLAT 50% OFF ON ALL STORES • WEEKEND SALE LIVE NOW
          </Text>
        </Marquee>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        {/* Featured Ad Banner */}
        <View style={styles.adContainer}>
          <ImageBackground
            style={styles.adImage}
            imageStyle={{borderRadius: 16}}
            source={{
              uri: 'https://images.unsplash.com/photo-1739444929269-341792e2a4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNob2VzJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D',
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
              style={styles.overlay}>
              <View style={styles.overlayContent}>
                <Text style={styles.overlayTextLarge}>80% OFF</Text>
                <Text style={styles.overlayTextSmall}>
                  WITH CODE: <Text style={styles.promoCode}>SHOP435</Text>
                </Text>
                <TouchableOpacity style={styles.shopNowButton}>
                  <Text style={styles.shopNowText}>SHOP NOW</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Featured Collections</Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Image Carousel */}
        <View style={styles.carouselWrapper}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={event => {
              const slideIndex = Math.floor(
                event.nativeEvent.contentOffset.x / (width - 40),
              );
              setActiveCarouselIndex(slideIndex);
            }}
            style={styles.carouselContainer}
            contentContainerStyle={{paddingHorizontal: 10}}
            decelerationRate="fast"
            snapToInterval={width - 40}>
            {imageUrls.map((item, idx) => (
              <View key={idx} style={styles.carouselItemContainer}>
                <ImageBackground
                  style={styles.carouselImageContainer}
                  imageStyle={styles.carouselImage}
                  source={{uri: item}}>
                  <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
                    style={styles.carouselOverlay}>
                    <Text style={styles.carouselTitle}>
                      {idx === 0
                        ? 'Summer Collection'
                        : idx === 1
                        ? 'Luxury Bags'
                        : 'Trendy Footwear'}
                    </Text>
                    <TouchableOpacity style={styles.carouselButton}>
                      <Text style={styles.carouselButtonText}>Explore</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>

          {/* Carousel Indicators */}
          <View style={styles.indicatorContainer}>
            {imageUrls.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.indicator,
                  activeCarouselIndex === idx ? styles.activeIndicator : {},
                ]}
              />
            ))}
          </View>
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Popular Stores</Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Shop Cards */}
        <View style={styles.shopCardsContainer}>
          {limitedProducts.map(item => (
            <ShopCard key={item.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocalHome;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: THEME.secondary,
    marginLeft: 8,
  },
  locationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.primary,
    marginLeft: 6,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 12,
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: THEME.primary,
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#15161D',
    fontSize: 10,
    fontFamily: 'Poppins-Bold',
  },
  searchBar: {
    position: 'relative',
    marginHorizontal: 20,
    marginTop: 6,
    marginBottom: 16,
    borderRadius: 999,
    backgroundColor: THEME.card,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: THEME.primary,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: THEME.text,
  },
  searchTextContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: THEME.primary,
  },
  searchText: {
    fontFamily: 'Poppins-Medium',
    color: '#15161D',
    fontSize: 14,
  },
  label: {
    backgroundColor: THEME.primary,
    paddingVertical: 8,
    marginBottom: 16,
  },
  labelText: {
    color: '#15161D',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  mainContent: {
    flex: 1,
  },
  adContainer: {
    marginHorizontal: 20,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  adImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 16,
  },
  overlayContent: {
    alignItems: 'flex-start',
  },
  overlayTextLarge: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
  },
  overlayTextSmall: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 12,
  },
  promoCode: {
    color: THEME.accent,
    fontFamily: 'Poppins-Bold',
  },
  shopNowButton: {
    backgroundColor: THEME.accent,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },
  shopNowText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#15161D',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: THEME.secondary,
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: THEME.primary,
  },
  carouselWrapper: {
    marginBottom: 24,
  },
  carouselContainer: {
    height: 240,
  },
  carouselItemContainer: {
    width: width - 40,
    height: 220,
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  carouselImageContainer: {
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    borderRadius: 16,
  },
  carouselOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    borderRadius: 16,
  },
  carouselTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  carouselButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  carouselButtonText: {
    color: '#15161D',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2E2E3A',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: THEME.primary,
    width: 20,
  },
  shopCardsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: THEME.card,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: THEME.secondary,
    marginBottom: 20,
  },
  locationBtn: {
    backgroundColor: THEME.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    color: '#15161D',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  locationList: {
    width: '100%',
    marginVertical: 16,
  },
  locationItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2E2E3A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeLocation: {
    backgroundColor: 'rgba(213, 239, 116, 0.1)',
    borderRadius: 8,
    borderBottomWidth: 0,
    marginVertical: 4,
  },
  cancelBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2E2E3A',
  },
  cancelBtnText: {
    color: THEME.lightText,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
});
