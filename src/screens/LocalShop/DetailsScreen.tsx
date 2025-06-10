import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};
const dimensions = Dimensions.get('screen');

// Sample product data for static display
const productData = [
  {
    id: '1',
    title: 'Stylish Jacket',
    price: '$99.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    title: 'Casual Sneakers',
    price: '$49.99',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1734543942921-a369a46c6a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1695603437447-21cc2e206536?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVyc2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1549654929-e63d34779e41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlbHRzfGVufDB8fDB8fHww',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '$29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1620327467532-6ebaca6273ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fwc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} color="white" size={28} />
        <Text style={styles.headerText}>Localz</Text>
      </View>

      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
        }}
      />

      <View style={styles.detailsSection}>
        <Text style={styles.productTitle}>Bougie Man</Text>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            • Fast fashion store for men
          </Text>
          <Text style={styles.descriptionText}>
            • Check us out on Instagram
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click to find us</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={productData}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2} // This ensures two items per row
      />
    </ScrollView>
  );
};

const ProductCard = ({product}: {product: Product}) => {
  return (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={{uri: product.imageUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 120,
  },
  image: {
    marginHorizontal: 20,
    height: 270,
    width: '100%',
  },
  detailsSection: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  productTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 26,
  },
  description: {
    gap: 10,
    paddingVertical: 20,
  },
  descriptionText: {
    color: '#adb5bd',
    fontSize: 12,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 14,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  flatListContainer: {
    paddingVertical: 10,
    // paddingHorizontal: 10,
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: 'gray',
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    flex: 1, // Ensures equal width for both cards in a row
  },
  productImage: {
    width: '100%',
    height: 200,
    borderWidth: 2.5,
    borderColor: 'black',
    borderRadius: 20,
  },
  productPrice: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default DetailsScreen;
