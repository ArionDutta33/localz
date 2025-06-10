import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faLocationDot,
  faShirt,
  faStar,
  faHeart,
  faRoute,
  faWifi,
  faCreditCard,
  faParking,
  faCheckCircle,
  faFire,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import {Shop} from '../types/navigation-types';
import {useNavigation, useRoute} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width - 32;

type ShopCardProps = {
  item: Shop;
};

const ShopCard: React.FC<ShopCardProps> = ({item}) => {
  const isOpen = true;
  const rating = 4.8;

  const category = 'Fashion & Clothing';
  const deliveryTime = '25-35 min';
  const originalPrice = '$45';
  const discountPrice = '$32';
  const discountPercent = '30% OFF';
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(prev => !prev);
  };
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.getParent()?.navigate('Details');
      }}
      style={styles.cardContainer}
      activeOpacity={0.95}>
      <View style={styles.card}>
        {/* Hero Image Section */}
        <View style={styles.imageSection}>
          <ImageBackground
            style={styles.imageContainer}
            imageStyle={styles.imageStyle}
            source={{
              uri: item.image,
            }}>
            {/* Dark Overlay */}
            <View style={styles.imageOverlay} />

            {/* Top Row */}
            <View style={styles.topRow}>
              <View style={styles.leftBadges}>
                {/* <View
                  style={[styles.statusBadge, !isOpen && styles.closedBadge]}> */}
                {/* <View
                    style={[
                      styles.statusIndicator,
                      !isOpen && styles.closedIndicator,
                    ]}
                  /> */}
                {/* <Text style={styles.statusText}>
                    {isOpen ? 'OPEN' : 'CLOSED'}
                  </Text> */}
                {/* </View> */}

                {/* {true && (
                  <View style={styles.popularBadge}>
                    <FontAwesomeIcon icon={faFire} size={10} color="#FF4500" />
                    <Text style={styles.popularText}>HOT</Text>
                  </View>
                )} */}
              </View>

              <TouchableOpacity
                onPress={handleLike}
                style={styles.favoriteButton}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={18}
                  color={isLiked ? '#FF4757' : '#FFFFFF'}
                />
              </TouchableOpacity>
            </View>

            {/* Bottom Image Content */}
            <View style={styles.bottomImageContent}>
              <View style={styles.ratingSection}>
                {/* <View style={styles.ratingBadge}>
                  <FontAwesomeIcon icon={faStar} size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>{rating}</Text>
                </View>
                <Text style={styles.reviewText}>248 reviews</Text> */}
              </View>

              <TouchableOpacity style={styles.directionsBtn}>
                <FontAwesomeIcon icon={faRoute} size={14} color="#FFFFFF" />
                <Text style={styles.directionsText}>Directions</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Store Header */}
          <View style={styles.storeHeader}>
            <View style={styles.titleSection}>
              <View style={styles.nameRow}>
                <Text style={styles.storeName} numberOfLines={1}>
                  {item.name}
                </Text>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size={18}
                  color="#00D4AA"
                />
              </View>

              <View style={styles.categoryRow}>
                <View style={styles.categoryChip}>
                  <FontAwesomeIcon icon={faShirt} size={12} color="#6C5CE7" />
                  <Text style={styles.categoryLabel}>{category}</Text>
                </View>
              </View>
            </View>

            {/* Pricing Section */}
            {/* {true && (
              <View style={styles.pricingCard}>
                <View style={styles.priceSection}>
                  <Text style={styles.currentPrice}>{discountPrice}</Text>
                  <Text style={styles.oldPrice}>{originalPrice}</Text>
                </View>
                <View style={styles.discountChip}>
                  <Text style={styles.discountLabel}>{discountPercent}</Text>
                </View>
              </View>
            )} */}
          </View>

          {/* Quick Info Cards */}
          <View style={styles.infoGrid}>
            {/* <Text>Check</Text> */}
            <Text style={{color: '#d9d9d9'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              odit, magnam autem quam repudiandae nam iusto ad deserunt velit
              voluptatem!
            </Text>
          </View>
          {/* <View style={styles.infoTile}>
            <View style={styles.infoIcon}>
              <FontAwesomeIcon icon={faClock} size={16} color="#4ECDC4" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>Delivery</Text>
              <Text style={styles.infoDetail}>{deliveryTime}</Text>
            </View>
          </View> */}

          {/* Services Row */}
          {/* <View style={styles.servicesSection}> */}
          {/* <Text style={styles.servicesTitle}>Services Available</Text> */}
          {/* <View style={styles.servicesRow}> */}
          {/* <View style={styles.serviceItem}>
                <View
                  style={[styles.serviceIcon, {backgroundColor: '#E3F2FD'}]}>
                  <FontAwesomeIcon icon={faWifi} size={14} color="#2196F3" />
                </View>
                <Text style={styles.serviceText}>WiFi</Text>
              </View> */}

          {/* <View style={styles.serviceItem}>
                <View
                  style={[styles.serviceIcon, {backgroundColor: '#F3E5F5'}]}>
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    size={14}
                    color="#9C27B0"
                  />
                </View>
                <Text style={styles.serviceText}>Cards</Text>
              </View> */}

          {/* <View style={styles.serviceItem}>
                <View
                  style={[styles.serviceIcon, {backgroundColor: '#E8F5E8'}]}>
                  <FontAwesomeIcon icon={faParking} size={14} color="#4CAF50" />
                </View>
                <Text style={styles.serviceText}>Parking</Text>
              </View> */}
          {/*
              <View style={styles.serviceItem}>
                <View
                  style={[styles.serviceIcon, {backgroundColor: '#FFF3E0'}]}>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    size={14}
                    color="#FF9800"
                  />
                </View>
                <Text style={styles.serviceText}>Pickup</Text>
              </View> */}
          {/* </View> */}
          {/* </View> */}

          {/* Footer Action */}
          {/* <View style={styles.footerAction}>
            <View style={styles.deliveryBanner}>
              <View style={styles.deliveryContent}>
                <Text style={styles.deliveryTitle}>
                  Free Delivery Available
                </Text>
                <Text style={styles.deliverySubtitle}>
                  Minimum order $25 • No extra fees
                </Text>
              </View>
              <View style={styles.ratingChip}>
                <FontAwesomeIcon icon={faStar} size={12} color="#FFFFFF" />
                <Text style={styles.chipRating}>{rating}</Text>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
    marginVertical: 14,
    width: CARD_WIDTH,
  },
  card: {
    borderWidth: 2.5,
    borderColor: 'white',
    backgroundColor: '#16151d',
    borderRadius: 28,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 16},
        shadowOpacity: 0.1,
        shadowRadius: 40,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  imageSection: {
    // borderBottomWidth: 2.5,
    // borderBottomLeftRadius: 28,
    // borderBottomRightRadius: 28,

    // borderColor: 'white',
    height: 220,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 0,
  },
  leftBadges: {
    gap: 10,
  },
  statusBadge: {
    backgroundColor: 'rgba(0, 212, 170, 0.9)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  closedBadge: {
    backgroundColor: 'rgba(255, 71, 87, 0.9)',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  closedIndicator: {
    backgroundColor: '#FFFFFF',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  popularBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  popularText: {
    color: '#FF4500',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  favoriteButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImageContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
    paddingTop: 0,
  },
  ratingSection: {
    alignItems: 'flex-start',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    gap: 6,
    marginBottom: 6,
  },
  ratingText: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: '800',
  },
  reviewText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  directionsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(108, 92, 231, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    gap: 8,
  },
  directionsText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  mainContent: {
    padding: 24,
  },
  storeHeader: {
    marginBottom: 24,
  },
  titleSection: {
    marginBottom: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  storeName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#d9d9d9',
    flex: 1,
    letterSpacing: -1,
  },
  categoryRow: {
    flexDirection: 'row',
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
    borderWidth: 1.5,
    borderColor: '#E9ECEF',
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6C5CE7',
  },
  pricingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    padding: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFE4CC',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FF6B35',
  },
  oldPrice: {
    fontSize: 16,
    color: '#999999',
    textDecorationLine: 'line-through',
    fontWeight: '600',
  },
  discountChip: {
    backgroundColor: '#FF6B35',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  discountLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  infoGrid: {
    // flexDirection: 'row',
    // gap: 16,
    // marginBottom: 24,
    // backgroundColor: 'red',
  },
  // infoTile: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#F8F9FA',
  //   padding: 16,
  //   borderRadius: 20,
  //   gap: 12,
  //   borderWidth: 1,
  //   borderColor: '#E9ECEF',
  // },
  // infoIcon: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   backgroundColor: '#FFFFFF',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: '#000',
  //       shadowOffset: {width: 0, height: 2},
  //       shadowOpacity: 0.1,
  //       shadowRadius: 4,
  //     },
  //     android: {
  //       elevation: 2,
  //     },
  //   }),
  // },
  // infoText: {
  //   flex: 1,
  // },
  // infoTitle: {
  //   fontSize: 12,
  //   color: '#666666',
  //   fontWeight: '600',
  //   // marginBottom: 4,
  //   textTransform: 'uppercase',
  //   letterSpacing: 0.8,
  // },
  // infoDetail: {
  //   fontSize: 14,
  //   color: '#1A1A1A',
  //   fontWeight: '800',
  // },
  servicesSection: {
    marginBottom: 24,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceItem: {
    alignItems: 'center',
    gap: 10,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '700',
  },
  footerAction: {
    marginTop: 8,
  },
  deliveryBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#BBF7D0',
  },
  deliveryContent: {
    flex: 1,
  },
  deliveryTitle: {
    fontSize: 16,
    color: '#16A34A',
    fontWeight: '800',
    marginBottom: 4,
  },
  deliverySubtitle: {
    fontSize: 13,
    color: '#16A34A',
    fontWeight: '600',
    opacity: 0.8,
  },
  ratingChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16A34A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  chipRating: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
  },
});
