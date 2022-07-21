import react, { createContext, useEffect, useMemo, useState, useContext } from 'react';

import {
    restaurantsRequest,
    restaurantsTransform
} from './restaurants.service';

import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        
        setIsLoading(true);
        setRestaurants([]);

        restaurantsRequest(loc)
            .then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    };

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat}, ${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};

// export { RestaurantsContext, RestaurantsContextProvider };