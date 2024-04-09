export type PollutionKeyType = 'co' | 'nh3' | 'no' | 'no2' | 'o3' | 'pm2_5' | 'pm10' | 'so2';

export type PollutionSelectDataType = typeof PollutionSelectData;

export const PollutionSelectData: Record<PollutionKeyType, string> = {
  co: 'carbon monoxide (CO) ',
  nh3: 'ammonia (NH3) ',
  no: 'nitrogen oxide (NO) ',
  no2: 'nitrogen dioxide (NO2) ',
  o3: 'ozone (O3) ',
  pm2_5: 'particulate matter - (PM2.5) ',
  pm10: 'particulate matter - (PM10) ',
  so2: 'sulfur dioxide (SO2) ',
};

export const PollutionData: Record<PollutionKeyType, string> = {
  co: 'The concentration of carbon monoxide (CO) ',
  nh3: 'nh3: Concentration of ammonia (NH3) ',
  no: 'Concentration of nitrogen oxide (NO) ',
  no2: 'Concentration of nitrogen dioxide (NO2) ',
  o3: 'Concentration of ozone (O3) ',
  pm2_5:
    'Concentration of particulate matter with a diameter of less than 2.5 micrometers (PM2.5) ',
  pm10: 'Concentration of particulate matter with a diameter of less than 10 micrometers (PM10) ',
  so2: 'Concentration of sulfur dioxide (SO2) ',
};

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
