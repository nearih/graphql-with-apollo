const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/schema')
const mongoose = require('mongoose')
const resolvers = require('./resolver/resolver')

mongoose.connect("mongodb://127.0.0.1:27017/gql")
mongoose.connection.once('open',()=>{
    console.log('establised database conenction')
})



const server = new ApolloServer({
    typeDefs,
    resolvers
 });


server.listen({port:2000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });


