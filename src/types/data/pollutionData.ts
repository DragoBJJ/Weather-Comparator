type PollutionKeyType = 'co' | 'nh3' | 'no' | 'no2' | 'o3' | 'pm2_5' | 'pm10' | 'so2';

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

export const PollutionData: Record<PollutionKeyType, string> = {
  co: 'The concentration of carbon monoxide (CO) in micrograms per cubic meter (μg/m³)',
  nh3: 'nh3: Concentration of ammonia (NH3) in micrograms per cubic meter (μg/m³)',
  no: 'Concentration of nitrogen oxide (NO) in micrograms per cubic meter (μg/m³)',
  no2: 'Concentration of nitrogen dioxide (NO2) in micrograms per cubic meter (μg/m³)',
  o3: 'Concentration of ozone (O3) in micrograms per cubic meter (μg/m³)',
  pm2_5:
    'Concentration of particulate matter with a diameter of less than 2.5 micrometers (PM2.5) in micrograms per cubic meter (μg/m³)',
  pm10: 'Concentration of particulate matter with a diameter of less than 10 micrometers (PM10) in micrograms per cubic meter (μg/m³)',
  so2: 'Concentration of sulfur dioxide (SO2) in micrograms per cubic meter (μg/m³)',
};
