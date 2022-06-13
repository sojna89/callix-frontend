import axios from "axios";
import useSWR from "swr";

const baseURL = 'https://callix-api.herokuapp.com/v1/launches/';
const timeout = 3000;

const api = axios.create({
  baseURL,
  timeout
});

const fetcher = async (url: string) => {
  const res = await api.get(url);
  console.log(res.data);
  return res.data

};

function useLaunch(endpoint: string) {
  const { data: launch, error: hasError } = useSWR(endpoint, fetcher);
  
  return {
    launch,
    hasError,
    isLoading: !hasError && !launch
  };
}

export default useLaunch;