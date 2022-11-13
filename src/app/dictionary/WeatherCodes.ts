/**
 * Weather interpretation codes
 *  - derived from: https://open-meteo.com/en/docs
 */
const WeatherCodes = [
  {
    code: '0',
    description: 'Clear Sky',
    imagePath: 'assets/weather/0.jpg',
    iconClass: 'wi-day-sunny',
  },
  {
    code: '1',
    description: 'Mainly Clear',
    imagePath: 'assets/weather/1.jpg',
    iconClass: 'wi-day-sunny',
  },
  {
    code: '2',
    description: 'Partly Cloudy',
    imagePath: 'assets/weather/2.jpg',
    iconClass: 'wi-day-cloudy',
  },
  {
    code: '3',
    description: 'Overcast',
    imagePath: 'assets/weather/3.jpg',
    iconClass: 'wi-day-sunny-overcast',
  },
  {
    code: '45,48',
    description: 'Foggy',
    imagePath: 'assets/weather/45.jpg',
    iconClass: 'wi-fog',
  },
  {
    code: '51,56',
    description: 'Drizzle',
    imagePath: 'assets/weather/51.jpg',
    iconClass: 'wi-rain-mix',
  },
  {
    code: '53',
    description: 'Moderate Drizzle',
    imagePath: 'assets/weather/51.jpg',
    iconClass: 'wi-rain-mix',
  },
  {
    code: '55,57',
    description: 'Dense Drizzle',
    imagePath: 'assets/weather/51.jpg',
    iconClass: 'wi-rain-mix',
  },
  {
    code: '61,66',
    description: 'Rain',
    imagePath: 'assets/weather/61.jpg',
    iconClass: 'wi-rain',
  },
  {
    code: '63',
    description: 'Moderate Rain',
    imagePath: 'assets/weather/61.jpg',
    iconClass: 'wi-rain',
  },
  {
    code: '65,67',
    description: 'Heavy Rain',
    imagePath: 'assets/weather/61.jpg',
    iconClass: 'wi-rain',
  },
  {
    code: '71',
    description: 'Snow Fall',
    imagePath: 'assets/weather/71.jpg',
    iconClass: 'wi-snow',
  },
  {
    code: '73',
    description: 'Moderate Snow Fall',
    imagePath: 'assets/weather/71.jpg',
    iconClass: 'wi-snow',
  },
  {
    code: '75',
    description: 'Heavy Snow Fall',
    imagePath: 'assets/weather/71.jpg',
    iconClass: 'wi-snow',
  },
  {
    code: '77',
    description: 'Snow Grains',
    imagePath: 'assets/weather/77.jpg',
    iconClass: 'wi-snow-wind',
  },
  {
    code: '80',
    description: 'Rain Showers',
    imagePath: 'assets/weather/80.jpg',
    iconClass: 'wi-showers',
  },
  {
    code: '81',
    description: 'Moderate Rain Showers',
    imagePath: 'assets/weather/80.jpg',
    iconClass: 'wi-showers',
  },
  {
    code: '82',
    description: 'Violent Rain Showers',
    imagePath: 'assets/weather/80.jpg',
    iconClass: 'wi-rain-wind',
  },
  {
    code: '85',
    description: 'Snow Showers',
    imagePath: 'assets/weather/85.jpg',
    iconClass: 'wi-sleet',
  },
  {
    code: '86',
    description: 'Heavy Snow Showers',
    imagePath: 'assets/weather/85.jpg',
    iconClass: 'wi-snow-wind',
  },
  {
    code: '95',
    description: 'Thunderstorm',
    imagePath: 'assets/weather/95.jpg',
    iconClass: 'wi-day-thunderstorm',
  },
  {
    code: '96',
    description: 'Thunderstorm (Hail)',
    imagePath: 'assets/weather/95.jpg',
    iconClass: 'wi-day-snow-thunderstorm',
  },
  {
    code: '99',
    description: 'Thunderstorm (Heavy Hail)',
    imagePath: 'assets/weather/95.jpg',
    iconClass: 'wi-day-snow-thunderstorm',
  },
];

export default WeatherCodes;
