import { Loader } from '@googlemaps/js-api-loader';



export const loadMap = () => {
  console.log( process.env.REACT_APP_MAPS_API_KEY)
  const loader = new Loader({
    apiKey: process.env.REACT_APP_MAPS_API_KEY || '',
    version: "weekly",
  });
  return loader.load();
}