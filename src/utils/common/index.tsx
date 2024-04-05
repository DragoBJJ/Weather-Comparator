
export const firstLetterUpperCase = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const calculateCelciusTemp = (temp: number) => {
  const KALIVIN = 273.15;
 return  Math.round(temp -  KALIVIN);
}
