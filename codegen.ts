import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: [process.env.GRAPHQL_ENDPOINT!, "./gql/localSchema.gql"],
  documents: ["**/*.vue"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
    "./gql/schema.gql": {
      plugins: ["schema-ast"], // @see https://stackoverflow.com/questions/37397886/get-graphql-whole-schema-query
      config: {
        includeDirectives: true,
        commentDescriptions: true,
      },
    },
  },
};

export default config;
