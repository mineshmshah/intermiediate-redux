import axios from 'axios'
const API_KEY = '756e990bb64a69cd64e5b2b4f8e71e28';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Convention to hold action type
// This will be imported into the reducer, so it prevents copy pasting of strings and string errors
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    //if payload is a promise like here redux-promise stops the payload
    // it then returns the the payload as the resolved request
    // if we console log the the request, it will show a promise, but when action is returned the promise is resolved
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}