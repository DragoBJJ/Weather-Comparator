type LoseAutoComplete<T extends string> = T | Omit<string, T>;
export type WeatherKeyType = LoseAutoComplete<KeyType>;

export type KeyType = 'Clouds' | 'Clear' | 'Haze' | 'Rain';
export type ImagesType = Record<KeyType, string>;

export const Images: ImagesType = {
  Clouds: '/src/public/images/clouds.jpg',
  Clear: '/src/public/images/clearSky.jpg',
  Haze: '/src/public/images/haze.jpg',
  Rain: "'/src/public/images/rain.jpg'",
};
