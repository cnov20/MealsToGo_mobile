import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = function (location) {
    // console.log(mocks[location]);
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Location — Not Found");
        }
        resolve(mock);
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