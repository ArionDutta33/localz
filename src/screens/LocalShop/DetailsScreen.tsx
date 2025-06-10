import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

type Product = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
};

const dimensions = Dimensions.get('screen');

// Sample product data for static display
const productData = [
  {
    id: '1',
    title: 'Stylish Jacket',
    price: '₹ 99.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    title: 'Casual Sneakers',
    price: '₹ 49.99',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1734543942921-a369a46c6a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
  },
  {
    id: '3',
    title: 'Leather Belt',
    price: '₹ 29.99',
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    title: 'Sport Shoes',
    price: '₹ 79.99',
    imageUrl:
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww',
  },
  {
    id: '5',
    title: 'Designer Bag',
    price: '₹ 149.99',
    imageUrl:
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '6',
    title: 'Winter Coat',
    price: '₹ 199.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '7',
    title: 'Luxury Purse',
    price: '₹ 89.99',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1695603437447-21cc2e206536?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVyc2V8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '8',
    title: 'Classic Jacket',
    price: '₹ 129.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '9',
    title: 'Formal Shirt',
    price: '₹ 59.99',
    imageUrl:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '10',
    title: 'Leather Belt Premium',
    price: '₹ 39.99',
    imageUrl:
      'https://images.unsplash.com/photo-1549654929-e63d34779e41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlbHRzfGVufDB8fDB8fHww',
  },
  {
    id: '11',
    title: 'Stylish Cap',
    price: '₹ 19.99',
    imageUrl:
      'https://images.unsplash.com/photo-1620327467532-6ebaca6273ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fwc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const DetailsScreen = () => {
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleProductLongPress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            color="white"
            size={28}
          />
        </Pressable>
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
          <Text style={{color: '#48cae4'}}>• wa.me/9395245194</Text>
          <Text style={styles.descriptionText}>
            • Instagram
            <Image
              height={100}
              width={100}
              style={{
                backgroundColor: 'red',
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYGK1sj6Ybm8uhae8QSfgNzGHLbTQWqaTnQ&s"
            />
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Click to find us</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={productData}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onLongPress={() => handleProductLongPress(item)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />

      {/* Product Details Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Product Details</Text>
                  <Pressable onPress={closeModal} style={styles.closeButton}>
                    <FontAwesomeIcon icon={faTimes} color="white" size={20} />
                  </Pressable>
                </View>

                <Image
                  style={styles.modalImage}
                  source={{uri: selectedProduct.imageUrl}}
                />

                <View style={styles.modalDetails}>
                  <Text style={styles.modalProductTitle}>
                    {selectedProduct.title}
                  </Text>
                  <Text style={styles.modalProductPrice}>
                    {selectedProduct.price}
                  </Text>

                  {/* <TouchableOpacity style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Add to Cart</Text>
                  </TouchableOpacity> */}

                  <TouchableOpacity
                    style={[styles.modalButton, styles.modalButtonSecondary]}
                    onPress={closeModal}>
                    <Text style={styles.modalButtonTextSecondary}>Close</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const ProductCard = ({
  product,
  onLongPress,
}: {
  product: Product;
  onLongPress: () => void;
}) => {
  return (
    <Pressable onPress={onLongPress} style={styles.productCard}>
      <Image style={styles.productImage} source={{uri: product.imageUrl}} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16151d',
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
    backgroundColor: '#16151d',
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: 'gray',
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    flex: 1,
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#16151d',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  modalDetails: {
    alignItems: 'center',
  },
  modalProductTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalProductPrice: {
    color: 'yellow',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
  },
  modalButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'yellow',
  },
  modalButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButtonTextSecondary: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetailsScreen;
