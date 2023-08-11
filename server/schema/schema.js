const {projects, clients} = require('./sampleData');
const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql');

//Client
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({