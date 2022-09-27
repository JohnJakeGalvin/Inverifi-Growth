module.exports = {
  client: {
    service: {
      name: "invotra",
      localSchemaFile: "./graphql-schema.json",
    },
    includes: ['./src/graphql/**/*.ts'],
  },
};
