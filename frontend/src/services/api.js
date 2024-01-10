import axios from 'axios';
import React, { UseEffect } from 'react';

const axiosInstance = () => {
    UseEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000');
          // Process the successful response data here
          console.log(response.data);
        } catch (error) {
          console.error('Network Error:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      // Your JSX code here
      axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true
      })
    );
  };
  
  export default axiosInstance

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true
// })

// export default axiosInstance