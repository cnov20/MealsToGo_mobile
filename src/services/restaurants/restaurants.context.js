import react, { createContext, useEffect, useMemo, useState } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

const RestaurantsContext = createContext();

const RestaurantsContextProvider = function ({ children }) {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = function () {
        setIsLoading(true);
        setTimeout(function () {
            restaurantsRequest()
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

    useEffect(function () {
        retrieveRestaurants();
    }, []);

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