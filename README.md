tut
    https://dev.to/adityajoshi12/graphql-with-nodejs-and-mongodb-2bdm

start
    nodemon src/
    
mutation{
  fakeData {
    name
    email
  }
}

query {
  userMany {
    name
    email
  }
}

#run util/insertMany

query {
  bookMany {
    title
    author
    cover
    tags
  }
}

mutation {
  userCreateOne (record: { name: "User 2", email: "email@example.com"}) {
    record {
      name
      email
    }
  }
}

mutation {
  bookCreateOne (record: { title: "Book 4", cover: "cover 4"}) {
    record {
      title
      cover
    }
  }
}



https://graphql-compose.github.io/docs/plugins/plugin-mongoose.html


