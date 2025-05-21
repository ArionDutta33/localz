import {useState} from 'react';
import {MockApi} from '../types/navigation-types';
import axios from 'axios';
import {API_URL} from '../utils/api';

const UseGetAllProducts = () => {
  const [products, setProducts] = useState<MockApi[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchAllProducts = async () => {
    setLoading(false);
    setError('');
    try {
      const response = await axios.get(API_URL);
      if (response.data) {
        const {Products} = response.data;
        setProducts(Products);
      }
    } catch (error) {
      console.log('Something went wrong');
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {fetchAllProducts, loading, products, error};
};

export default UseGetAllProducts;
