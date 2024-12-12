import { publicApi } from '.';

export const charactersApi = publicApi.injectEndpoints({
  endpoints: build => ({
    getCharacterInfo: build.query({
      query: body => ({
        url: '/character',
        method: 'GET',
        params: body,
      }),
      providesTags: ['GetCharacterInfo'],
    }),
  }),
});

export const { useGetCharacterInfoQuery  } = charactersApi;
