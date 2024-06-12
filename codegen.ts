
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://vericert-backend-production.up.railway.app/graphql",
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/graphql/codegen": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
