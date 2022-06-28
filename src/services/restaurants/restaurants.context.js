import react, { createContext, useEffect, useMemo, useState, useContext } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

import { LocationContext } from '../location/location.context';

const RestaurantsContext = createContext();

const RestaurantsContextProvider = function ({ children }) {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = function (loc) {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(function () {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                }).catch(error => {
                    setIsLoading(false);
                    setError(error);
                })
        }, 2000)
    };

    // useEffect(function () {
    //     retrieveRestaurants(location);
    // }, []);

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat}, ${location.lng}`;
            // console.log(locationString);
            retrieveRestaurants(locationString);
        }
       
    }, [location])

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: restaurants,
                isLoading: isLoading,
                error: error
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
}

export { RestaurantsContext, RestaurantsContextProvider };