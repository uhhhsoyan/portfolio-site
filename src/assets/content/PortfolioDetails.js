import videoSpotify from '../img/video-spotify-test.mp4';
import videoWeatherMobile from '../img/video-weather-mobile.mp4';
import videoCountryQuiz from '../img/video-country-quiz.mov';
import videoOmnifood from '../img/video-omnifood-web.mov';
import videoWindbnb from '../img/video-windbnb.mp4';

const PortfolioDetails = {
  'spotify-mobile': {
    title: 'Spotify Clone',
    subtitle: 'Watch out spotify, here comes Spotify 2',
    platform: 'Mobile',
    tech: ['React Native', 'Typescript', 'Expo-AV'],
    video: videoSpotify,
    description: 'This project is a clone of the Spotify mobile app built with React Native. Users can use the tab navigator to access Home, Search, and Library screens. The app is connected to the Spotify Web API, enabling users to search for songs, artists, playlists, and more. The \'expo-av\' library enables playback of selected audio in the app.',
    github: 'https://github.com/uhhhsoyan/spotify-mobile',
    site: null,
  },
  'weather-mobile': {
    title: 'Weather App',
    subtitle: 'A simple react native weather app powered by Metaweather API',
    platform: 'Mobile',
    tech: ['React Native'],
    video: videoWeatherMobile,
    description: 'A simple weather app powered by Metaweather API. Users can search locations or use geolocation to set weather location.',
    github: 'https://github.com/uhhhsoyan/weather-mobile',
    site: null,
  },
  'country-quiz-web': {
    title: 'Country Quiz',
    subtitle: 'Web app that quizzes users on country flags and capitals',
    platform: 'Web',
    tech: ['React'],
    video: videoCountryQuiz,
    description: 'This app randomly generates quiz questions covering country flags and capitals using the REST Countries API. It provides real-time feedback to users based on their answers and a summary of their results upon completing the quiz.',
    github: 'https://github.com/uhhhsoyan/country-quiz',
    site: 'https://country-quiz.ericessoyan.me/',
  },
  'omnifood-web': {
    title: 'Omnifood',
    subtitle: 'Beautiful landing page for hypothetical startup',
    platform: 'Web',
    tech: ['CSS', 'jQuery'],
    video: videoOmnifood,
    description: 'This is a beautiful landing page built for a hypothetical food delivery company called Omnifood. The project is built entirely with HTML and CSS.',
    github: 'https://github.com/uhhhsoyan/omnifood',
    site: 'https://omnifood.ericessoyan.me/',
  },
  'windbnb-mobile': {
    title: 'Windbnb',
    subtitle: 'Mock Airbnb search interface',
    platform: 'Mobile',
    tech: ['React Native', 'Typescript'],
    video: videoWindbnb,
    description: 'This mini-app is inspired by the Airbnb search interface. Users search for stays, filter by location and guests, and view the corresponding results.',
    github: 'https://github.com/uhhhsoyan/windbnb-mobile',
    site: null,
  },
  'weather-web': {
    title: 'Weather (Web)',
    subtitle: 'A simple react native weather app powered by Metaweather API',
    platform: 'Web',
    tech: ['React'],
    video: videoWeatherMobile,
    description: 'Simple react native weather app enabling users to search a location and view corresponding forecast and weather data. Powered by Metaweather API.',
    github: 'https://github.com/uhhhsoyan/weather',
    site: null,
  },

}

export default PortfolioDetails;

/*
https://omnifood.ericessoyan.me/
https://weather.ericessoyan.me/
https://windbnb.ericessoyan.me/
*/