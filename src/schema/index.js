const graphql = require('graphql');
const { GraphQLSchema } = graphql;

// Root
const query = require('./root_query');

module.exports = new GraphQLSchema({ query });