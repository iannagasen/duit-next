import { useEffect, useState } from "react";
import useDidUpdateEffect from './useDidUpdateEffect';
import axios from 'axios';

interface FetchStates {
  data: any;
  loading: boolean;
  error: any;
}

export default function useFetchPost(url: string, payload: any): FetchStates {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setError(null); // Reset error when the payload or URL changes
  }, [payload, url]);


  useDidUpdateEffect(() => {
    setLoading(true);
    axios
      .post(url, payload)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [payload, url]);

  return { data, loading, error }
}
