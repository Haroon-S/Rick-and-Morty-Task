import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: () => ({}),
});
