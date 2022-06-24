import { mocks } from "./mock";
import camelize from "camelize";

const restaurantsRequest = function (location = "37.7749295,-122.4194155") {
    // console.log(mocks[location]);
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("Location — Not Found");
        }
        resolve(mock);
    });
}

const restaurantsTransform = function ({ results = [] }) {
    const mappedResults = results.map(function (restaurant) {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }
    })
    const newResult = camelize(mappedResults);
    return newResult;
}

restaurantsRequest()
    .then(restaurantsTransform)
    .then((transformedResponse) => {
        console.log(transformedResponse);
    })
    .catch((error) => {
    console.log(error);
    });


export { restaurantsRequest, restaurantsTransform };