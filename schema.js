const graphql = require("graphql");
const _  = require('lodash');
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
 } = graphql;

const users = [
    {id: 123, firstName: 'john', age:10},
    {id: 456, firstName: 'maria', age:18}
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
      id: {type},
      firtName: {type: GraphQLString},
      age: {type: GraphQLInt}
  }
});

cont RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            } 
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});