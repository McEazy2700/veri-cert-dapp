import { getAuthTokens } from "@/utils/localStorage";
import { Client, cacheExchange, fetchExchange } from "urql";

export const client = new Client({
	url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPONT ?? "",
	exchanges: [cacheExchange, fetchExchange],
	fetchOptions: () => {
		const tokens = getAuthTokens();
		return {
			headers: { authorization: tokens.token ? `Bearer ${tokens.token}` : "" },
		};
	},
});
