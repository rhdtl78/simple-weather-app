# Simple Weather App

A simple weather application
This app adds the function of displaying location information using Geocoding to the results of the training of Nomad Coder.

---

### Dependency
- expo-cli (global)
- expo": "~37.0.3",
- expo-linear-gradient": "^8.1.0",
- react": "~16.9.0",
- react-dom": "~16.9.0",
- react-native": "https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz",
- react-native-screens": "~2.2.0",
- react-native-web": "~0.11.7"
- @babel/core": "^7.8.6"
- @types/expo": "^33.0.1",
- @types/node": "^13.13.4",
- @types/react": "~16.9.23",
- @types/react-native": "~0.61.17",
- @types/react-native-dotenv": "^0.2.0",
- babel-plugin-module-resolver": "^4.0.0",
- babel-preset-expo": "~8.1.0",
- react-native-dotenv": "^0.2.0",
- typescript": "~3.8.3"

---

### Envs
To run this app, you should get 2 API keys at least.
- GCP_GEOCODING_API_KEY
  - For GCP Geocoding Api
- OPEN_WEATHER_API_KEY
  - For fetching weather data from [OpenWeatherMap](https://openweathermap.org)

Thease are all necessary. Thease are should be set in .env file on project root
(See file .env.example)

---
### Todo
- [x] Display location or address.
- [ ] Show forecasts by touch the icon. 
- [ ] Set custom location.