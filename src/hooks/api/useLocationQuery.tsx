import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";



export const  UseLocationQuery =  (key: QueryKey, apiUrl: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await axios.get<{ data: Location[] }>(apiUrl);
      return response.data
    },
    enabled:  !!apiUrl
  });
}
