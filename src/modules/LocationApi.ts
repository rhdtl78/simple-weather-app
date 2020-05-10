import { GCP_GEOCODING_API_KEY } from 'react-native-dotenv';

export default class LocationApi {
  async getAddress(lat: number, lon: number): Promise<string> {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GCP_GEOCODING_API_KEY}`
    );
    const res = await response.json();

    return res.results[0].formatted_address;
  }
}
