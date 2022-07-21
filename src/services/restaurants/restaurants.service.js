import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = function (location) {
    return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
        return res.json();
      });
}

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map(function (photo) {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });

        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        };
    });
    
    return camelize(mappedResults);
}


// export { restaurantsRequest, restaurantsTransform };