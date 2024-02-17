export interface ICityResponse {
  name: string;
  local_names: {
    en: string;
    uk: string;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
}
