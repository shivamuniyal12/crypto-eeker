import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders1 = {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '655d4d30a4mshf3b29ab3912b45fp1337dejsn31c580a32907'
}
const baseUrl = 'https://coingecko.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders1});
export const cryptoApi2 = createApi({
    reducerPath: 'cryptoApi2',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchanges: builder.query({
          query: () => createRequest('/exchanges'),
        }),
      }),
    });
    
    export const {
      useGetExchangesQuery,
    } = cryptoApi2;
