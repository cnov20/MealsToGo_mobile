import react, { createContext, useEffect, useMemo } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

const RestaurantsContext = createContext();

const RestaurantsContextProvider = function ({ children }) {
    return <RestaurantsContext.Provider value={{
        restaurants: [1, 2, 3, 4, 5]
    }}>{children}</RestaurantsContext.Provider>;
};


export { RestaurantsContext, RestaurantsContextProvider };