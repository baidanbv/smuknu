import { useState, useEffect } from 'react';
import axios from 'axios';

interface Data<T> {
  data: T | null;
}

const useDataFetching = <T>(url: string): Data<T> => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error( 'Error fetching data');
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useDataFetching;
