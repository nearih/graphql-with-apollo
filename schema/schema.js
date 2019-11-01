const { gql } = require('apollo-server');

const typeDefs = gql`

    type Book{
        id: ID!
        name: String!
        genre: String!
        author: Author!
    }

    type Author{
        id: ID!
        name: String!
        age: Int!
        book: [Book]!
    }

    type Query{
        books: [Book]
        authors: [Author]
    }

    type Mutation{
        addBook(name:String!, genre:String!, authorId: ID!):Book
        addAuthor(name:String!, age:Int!):Author
    }

`

module.exports = typeDefs