import {useEffect, useState} from 'react';
import {MockApi} from '../types/navigation-types';
import axios from 'axios';
import {API_URL} from '../utils/api';

const UseGetAllProducts = () => {
  const [products, setProducts] = useState<MockApi[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(false);
      setError('');
      try {
        const response = await axios.get(`${API_URL}`);
        console.log('Products', response);
        if (response.data) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log('Something went wrong');
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  return {loading, products, error};
};

export default UseGetAllProducts;
