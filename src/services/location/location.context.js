import { View, Text } from 'react-native'
import react, { createContext, useState, useEffect } from 'react'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = react.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };
  
    useEffect(() => {
      if (!keyword.length) {
        // don't do anything
        return;
      }
      locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          // setError(null);
          setIsLoading(false);
          setLocation(result);
          // console.log("RESULT: ", result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, [keyword]);
  
    return (
      <LocationContext.Provider
        value={{
          isLoading,
          error,
          location,
          search: onSearch,
          keyword,
        }}
      >
        {children}
      </LocationContext.Provider>
  );
}