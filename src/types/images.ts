type LoseAutoComplete<T extends string> = T | Omit<string, T>;
export type WeatherKeyType = LoseAutoComplete<KeyType>;

export type KeyType = 'Clouds' | 'Clear' | 'Haze' | 'Rain';
export type ImagesType = Record<KeyType, string>;

export const Images: ImagesType = {
  Clouds: '/images/clouds.jpg',
  Clear: '/images/clearSky.jpg',
  Haze: '/images/haze.jpg',
  Rain: '/images/rain.jpg',
};
