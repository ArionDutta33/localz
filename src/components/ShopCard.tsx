import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faLocationDot,
  faShirt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const ShopCard = ({
  name = 'Fashion World',
  address = '123 Street Name, City',
  category = 'Clothing & Accessories',
  hours = '9:00 AM - 9:00 PM',
  imageUrl = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&auto=format&fit=crop&q=60',
  rating = 4.8,
  isOpen = true,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.9}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.imageStyle}
          source={{uri: imageUrl}}>
          {isOpen ? (
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>OPEN NOW</Text>
            </View>
          ) : (
            <View style={[styles.statusBadge, styles.closedBadge]}>
              <Text style={styles.statusText}>CLOSED</Text>
            </View>
          )}

          <View style={styles.ratingContainer}>
            <FontAwesomeIcon icon={faStar} size={12} color="#FFC107" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </ImageBackground>

        <View style={styles.details}>
          <View style={styles.nameRow}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <View style={styles.categoryTag}>
              <FontAwesomeIcon icon={faShirt} size={10} color="#5B21B6" />
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <FontAwesomeIcon icon={faLocationDot} size={14} color="#64748B" />
              <Text style={styles.meta} numberOfLines={1}>
                {address}
              </Text>
            </View>

            <View style={styles.row}>
              <FontAwesomeIcon icon={faClock} size={14} color="#64748B" />
              <Text style={styles.meta}>{hours}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 2,
    marginVertical: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    height: 140,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // padding: 12,
  },
  imageStyle: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  statusBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  closedBadge: {
    backgroundColor: '#EF4444',
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    gap: 3,
  },
  ratingText: {
    color: '#111827',
    fontSize: 12,
    fontWeight: '700',
  },
  details: {
    padding: 16,
  },
  nameRow: {
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  categoryTag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    gap: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#5B21B6',
    fontWeight: '600',
  },
  infoContainer: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  meta: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },
});
