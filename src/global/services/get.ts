import axios, { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { ItemProps } from '../../components/itemComponent';
import api from './baseUrl';

// const api = axios.create({
//   baseURL: 'https://',
// });

export function useFetchRequest<T = unknown>(
  url: string
) {
  const [dataTask, setDataTask] = useState<ItemProps[]>([])
  const [isloading, setIsloading] = useState(false)

  axios.get('https://kevinkevinkevinkevin.loca.lt/' + url)
    .then(function (response) {
      setIsloading(true),
        setDataTask(response.data),
        console.log('dataTask', dataTask)
    })
    .catch(function (error) {
      console.log('error', error);
    })
    .finally(function () {
      setIsloading(false)
    });

  return {dataTask, isloading}
}



// export function useFetch<T = unknown>(
//   url: string,
//   options?: AxiosRequestConfig,
// ) {
//   const [data, setData] = useState<T>({} as T);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);

//   async function fetchData(onSuccess?: (response: T) => void) {
//     try {
//       setLoading(true);
//       const response = await api.get(url, options);
//       setData(response.data);
//       response.data && onSuccess && onSuccess(response.data);
//     } catch (erro) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   return { data, loading, setLoading, error, fetchData, setData };
// }