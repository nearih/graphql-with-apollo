const Book = require('../model/book')
const Author = require('../model/author')

module.exports={
    Query:{
        books: () => Book.find({}),
        authors: () => Author.find({})
    },
    Mutation:{
        addBook: (_,args,__)=> {
            let nbook = new Book({
                name: args.name,
                genre: args.genre,
                authorId: args.authorId
            })
            return nbook.save()
        },
        addAuthor:(_,args,__)=>{
            let author = new Author({
                name: args.name,
                age: args.age
            })
            return author.save()
        }
    },
}