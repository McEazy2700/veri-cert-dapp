const TOKEN = "authToken";
const REFRESH_TOKEN = "refreshToken";

const getAuthTokens = () => {
	let token: string | null = null;
	let refreshToken: string | null = null;
	if (typeof window !== "undefined") {
		token = localStorage.getItem(TOKEN);
		refreshToken = localStorage.getItem(REFRESH_TOKEN);
	}
	return { token, refreshToken };
};

const setAuthToken = (args: { token: string; refreshToken: string }) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(TOKEN, args.token);
		localStorage.setItem(REFRESH_TOKEN, args.refreshToken);
	}
};
