import axios from "axios";
import useSWR from "swr";

const baseURL = 'https://callix-api.herokuapp.com/v1/launches/';
const timeout = 3000;

const api = axios.create({
  baseURL,
  timeout
});

const fetcher = async (url: string) => {
  try {
    const res = await api.get(url);
    return res.data
    
  } catch (error) {
    throw error;
  }
};

function useLaunch(endpoint: string) {
  const { data: launch, error } = useSWR(endpoint, fetcher);
  
  let hasError: any = false;
  if(error != undefined)
    hasError = `${error}`.replace('AxiosError: ', '');

  return {
    launch,
    hasError,
    isLoading: !error && !launch
  };
}

export default useLaunch;