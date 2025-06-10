import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {THEME} from './LocalHome'; // Assuming THEME is imported from your theme file
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapPin,
  faBagShopping,
  faLocationDot,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {MockData} from '../../assets/mock-data/mock_shops';
import {Shop} from '../../types/navigation-types';
import ShopCard from '../../components/ShopCard';

const Search = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Shop[]>([]);
  const [products, setProducts] = useState<Shop[]>(MockData);

  const handleSearchChange = (text: string) => {
    setQuery(text);
    const filtered = products.filter(shop =>
      shop.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSuggestions(filtered);
  };

  const handleSuggestionPress = (shop: Shop) => {
    setQuery(shop.name);
    setSuggestions([]);
  };

  // Get filtered data for display - this is the key change
  const getDisplayData = () => {
    if (query.trim() === '') {
      return products; // Show all products when no search query
    }
    return products.filter(shop =>
      shop.name.toLowerCase().includes(query.toLowerCase()),
    );
  };

  return (
    <SafeAreaView style={styles.mainContaienr}>
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
                    key={index}
                    onPress={() => {
                      setSelectedIndex(index);
                      setLocation(city);
                    }}
                    style={[
                      styles.locationItem,
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.locationSelector}
          onPress={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faMapPin} color={THEME.primary} size={18} />
          <Text style={styles.locationText}>{location || 'Jorhat'}</Text>
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
            value={query}
            onChangeText={handleSearchChange}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => setQuery('')}
          style={styles.searchTextContainer}>
          <Text style={styles.searchText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Auto-suggestions */}
      {suggestions.length > 0 && query && (
        <View style={styles.suggestionList}>
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(item)}>
                <Text style={styles.suggestionText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Shop List - Now uses filtered data */}
      <FlatList
        data={getDisplayData()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ShopCard item={item} />}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContaienr: {
    backgroundColor: THEME.background,
    flex: 1,
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
  searchBar: {
    marginHorizontal: 20,
    marginTop: 6,
    marginBottom: 8,
    borderRadius: 999,
    backgroundColor: THEME.card,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
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
    color: THEME.secondary,
    fontSize: 15,
  },
  searchTextContainer: {
    paddingHorizontal: 10,
  },
  searchText: {
    color: THEME.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  suggestionList: {
    backgroundColor: THEME.card,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 4,
    marginBottom: 8,
    elevation: 2,
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  suggestionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: THEME.secondary,
  },
});
