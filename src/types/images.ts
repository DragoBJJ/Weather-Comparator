type LoseAutoComplete<T extends string> = T | Omit<string, T>;
export type WeatherKeyType = LoseAutoComplete<KeyType>;

export type KeyType = 'Clouds' | 'Clear' | 'Haze' | 'Rain';
export type ImagesType = Record<KeyType, string>;

export const Images: ImagesType = {
  Clouds: '/public/images/clouds.jpg',
  Clear: '/public/images/clearSky.jpg',
  Haze: '/public/images/haze.jpg',
  Rain: '/public/images/rain.jpg',
};
