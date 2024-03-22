import { apiSlice } from "./apiSlice";

export const clientSlice = apiSlice.injectEndpoints({
        endpoints: (builder) => ({
                sendClientMessage: builder.mutation({
                        query: (payload) => ({
                                url: `client/send`,
                                method: 'POST',
                                body: payload
                        })
                })
        })
})

export const { useSendClientMessageMutation } = clientSlice