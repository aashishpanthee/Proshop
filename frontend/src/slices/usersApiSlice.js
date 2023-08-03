import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      /* builder.query is used to define endpoints for data retrieval or querying operations,
       whereas builder.mutation is used for defining endpoints that modify or mutate data on the server. 
       When defining a builder.query endpoint, you typically specify the parameters or options required for the query and 
       receive data in the response payload. On the other hand, builder.mutation endpoints typically accept some data 
       in the request payload that will be used for the mutation operation and return a response payload indicating
        the success or failure of the mutation.
       */

      // the query is the data that is being sent to the api.
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
} = usersApiSlice;
