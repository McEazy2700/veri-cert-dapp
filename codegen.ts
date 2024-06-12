import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://vericert-backend-production.up.railway.app/graphql",
	documents: "src/graphql/**/*.ts",
	generates: {
		"src/graphql/graphl_generated.ts": {
			plugins: ["typescript", "typescript-operations", "typescript-urql"],
		},
	},
};

export default config;
