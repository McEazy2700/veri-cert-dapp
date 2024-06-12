import { Client, cacheExchange, fetchExchange } from "urql";

export const client = new Client({
	url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPONT ?? "",
	exchanges: [cacheExchange, fetchExchange],
	fetchOptions: () => {
		const token = getAuthTokens();
		return {
			headers: { authorization: token ? `Bearer ${token}` : "" },
		};
	},
});
