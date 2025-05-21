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
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLocationDot,
  faSearch,
  faTimes,
  faHeart,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import ShopCard from '../../components/ShopCard';
import {Marquee} from '@animatereactnative/marquee';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const featuredItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1638993606271-04836e75d662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Summer Collection',
    subtitle: 'New Arrivals',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D',
    title: 'Luxury Bags',
    subtitle: 'Premium Selection',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    title: 'Footwear',
    subtitle: 'Trending Now',
  },
];

const LocalHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Guwahati');
  const [searchText, setSearchText] = useState('');
  const scrollX = useRef(new Animated.Value(0)).current;
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto scroll for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = (activeSlide + 1) % featuredItems.length;
        carouselRef.current.scrollTo({x: nextSlide * width, animated: true});
        setActiveSlide(nextSlide);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const handleMomentumScrollEnd = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  const selectLocation = location => {
    setSelectedLocation(location);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />

      {/* Location Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choose Your Location</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <FontAwesomeIcon icon={faTimes} size={18} color="#333" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.locationBtn}>
              <FontAwesomeIcon
                icon={faLocationDot}
                color="white"
                size={16}
                style={styles.btnIcon}
              />
              <Text style={styles.btnText}>Auto Detect My Location</Text>
            </TouchableOpacity>

            <View style={styles.locationList}>
              {[
                'Guwahati',
                'Jorhat',
                'Dibrugarh',
                'Tezpur',
                'Silchar',
                'Nagaon',
              ].map((city, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.locationItem,
                    selectedLocation === city && styles.locationItemSelected,
                  ]}
                  onPress={() => selectLocation(city)}>
                  <Text
                    style={[
                      styles.locationText,
                      selectedLocation === city && styles.locationTextSelected,
                    ]}>
                    {city}
                  </Text>
                  {selectedLocation === city && (
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="#FF6B00"
                      size={14}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollContainer}>
        {/* Header and Search Bar */}
        <View style={styles.header}>
          <View style={styles.locationButton}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.locationDisplay}>
              <FontAwesomeIcon icon={faLocationDot} color="#FF6B00" size={16} />
              <Text style={styles.locationDisplayText}>{selectedLocation}</Text>
            </TouchableOpacity>

            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesomeIcon icon={faHeart} color="#333" size={18} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesomeIcon icon={faShoppingBag} color="#333" size={18} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchBar}>
            <FontAwesomeIcon
              icon={faSearch}
              color="#888"
              size={16}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search for products, brands and more"
              placeholderTextColor={'#888'}
              style={styles.textInput}
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchText('')}
                style={styles.clearButton}>
                <FontAwesomeIcon icon={faTimes} color="#888" size={16} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Promotional Banner */}
        <View style={styles.promotionContainer}>
          <LinearGradient
            colors={['#FF6B00', '#FF9248']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.promotion}>
            <Marquee spacing={40} speed={0.5} style={styles.marquee}>
              <Text style={styles.promotionText}>
                🔥 FLASH SALE: GET 50% OFF ON ALL ITEMS TODAY! 🔥
              </Text>
            </Marquee>
          </LinearGradient>
        </View>

        {/* Featured Deal */}
        <TouchableOpacity style={styles.adContainer}>
          <ImageBackground
            style={styles.adImage}
            imageStyle={styles.adImageStyle}
            source={{
              uri: 'https://images.unsplash.com/photo-1739444929269-341792e2a4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkaWRhcyUyMHNob2VzJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D',
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
              style={styles.overlay}>
              <View style={styles.dealContent}>
                <View style={styles.dealTag}>
                  <Text style={styles.dealTagText}>LIMITED TIME</Text>
                </View>
                <Text style={styles.dealTitle}>SUMMER SALE</Text>
                <Text style={styles.dealDescription}>
                  Up to 80% off on selected items
                </Text>
                <View style={styles.codeContainer}>
                  <Text style={styles.codeLabel}>USE CODE:</Text>
                  <Text style={styles.codeValue}>SHOP435</Text>
                </View>
                <TouchableOpacity style={styles.shopNowButton}>
                  <Text style={styles.shopNowText}>SHOP NOW</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>

        {/* Featured Categories Carousel */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Collections</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.carouselContainer}>
            <ScrollView
              ref={carouselRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              onMomentumScrollEnd={handleMomentumScrollEnd}
              scrollEventThrottle={16}
              decelerationRate="fast">
              {featuredItems.map((item, index) => (
                <TouchableOpacity key={item.id} style={styles.carouselSlide}>
                  <ImageBackground
                    source={{uri: item.image}}
                    style={styles.carouselImage}
                    imageStyle={styles.carouselImageStyle}>
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.7)']}
                      style={styles.carouselOverlay}>
                      <View style={styles.carouselContent}>
                        <Text style={styles.carouselSubtitle}>
                          {item.subtitle}
                        </Text>
                        <Text style={styles.carouselTitle}>{item.title}</Text>
                        <TouchableOpacity style={styles.carouselButton}>
                          <Text style={styles.carouselButtonText}>Explore</Text>
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.paginationContainer}>
              {featuredItems.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === activeSlide && styles.paginationDotActive,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Nearby Shops */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby Shops</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.shopsContainer}>
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 ShopLocal. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocalHome;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  mainScrollContainer: {
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  locationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDisplayText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  clearButton: {
    padding: 5,
  },
  promotionContainer: {
    marginVertical: 12,
  },
  promotion: {
    paddingVertical: 10,
  },
  marquee: {
    height: 24,
  },
  promotionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  adContainer: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 180,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  adImage: {
    width: '100%',
    height: '100%',
  },
  adImageStyle: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  dealContent: {
    alignItems: 'flex-start',
  },
  dealTag: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  dealTagText: {
    color: '#FF6B00',
    fontSize: 10,
    fontWeight: 'bold',
  },
  dealTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dealDescription: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  codeLabel: {
    color: 'white',
    fontSize: 12,
    marginRight: 6,
  },
  codeValue: {
    color: '#FF9248',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopNowButton: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  shopNowText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  seeAllText: {
    color: '#FF6B00',
    fontSize: 14,
    fontWeight: '600',
  },
  carouselContainer: {
    marginHorizontal: -16,
  },
  carouselSlide: {
    width,
    height: 220,
    paddingHorizontal: 16,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  carouselImageStyle: {
    borderRadius: 16,
  },
  carouselOverlay: {
    height: '60%',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  carouselContent: {
    padding: 16,
  },
  carouselSubtitle: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 4,
  },
  carouselTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carouselButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  carouselButtonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 12,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    margin: 4,
  },
  paginationDotActive: {
    backgroundColor: '#FF6B00',
    width: 12,
    height: 8,
  },
  shopsContainer: {
    marginTop: 8,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  locationBtn: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIcon: {
    marginRight: 8,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  locationList: {
    width: '100%',
    marginVertical: 10,
  },
  locationItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationItemSelected: {
    backgroundColor: '#FFF8F3',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
  locationTextSelected: {
    color: '#FF6B00',
    fontWeight: '600',
  },
});
