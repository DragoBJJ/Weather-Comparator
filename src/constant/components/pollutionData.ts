import { PollutionKeyType } from '../../types/components/pollutionType';

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
