import { PollutionSelectData } from '../../constant/components/pollutionData';

export type PollutionKeyType = 'co' | 'nh3' | 'no' | 'no2' | 'o3' | 'pm2_5' | 'pm10' | 'so2';

export type PollutionSelectDataType = typeof PollutionSelectData;

export type PollutionApiData = {
  components: {
    co: number;
    nh3: number;
    no: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
    so2: number;
  };
  dt: number;
  main: { aqi: number };
};

export type AirPollution = {
  coord: {
    lat: number;
    lon: number;
  };
  list: [
    {
      main: {
        aqi: number;
      };
      components: {
        co: number;
        no: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        nh3: number;
      };
      dt: number;
    },
  ];
};

export type AirPollutionKey = AirPollution['list'][0]['components'];
