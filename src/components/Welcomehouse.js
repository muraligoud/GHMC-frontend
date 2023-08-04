import axios from 'axios';
import React, { useEffect, useState } from 'react';

axios.defaults.withCredentials = true;

const Welcomehouse = () => {
  const [user, setUser] = useState();
  const [firstRender, setFirstRender] = useState(true);

  const refreshToken = async () => {
    try {
      const apiUrl = 'http://localhost:5000/test/house/refresh';
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });

      // Check if response.data has a 'user' property before accessing it
      if (response.data && response.data.user) {
        return response.data;
      }
    } catch (error) {
      console.log('Error refreshing token:', error);
      throw error;
    }
  };

  const sendRequest = async () => {
    try {
      const apiUrl = 'http://localhost:5000/api/user';
      const response = await axios.get(apiUrl, {
        withCredentials: true,
      });

      // Check if response.data has a 'user' property before accessing it
      if (response.data && response.data.user) {
        return response.data;
      }
    } catch (error) {
      console.log('Error fetching user data:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      sendRequest()
        .then((data) => setUser(data.user))
        .catch((error) => console.log('Error setting user data:', error));
    }

    const refreshTokenInterval = 1000 * 29; // Refresh token every 29 seconds
    const interval = setInterval(() => {
      refreshToken()
        .then((data) => setUser(data.user))
        .catch((error) => console.log('Error refreshing user data:', error));
    }, refreshTokenInterval);

    return () => clearInterval(interval);
  }, [firstRender]);

  return (
    <div>
      {user && <h1>Welcome, {user.name}</h1>}
    </div>
  );
};

export default Welcomehouse;