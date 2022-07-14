import { createServer  } from "@graphql-yoga/node";
import resolvers from "./movieQL/resolvers";
const fs = require("fs");
const path = require("path");
//console.log("hello"); 


// const server = createServer ({
//     typeDefs: "movieQL/schema.graphql" ,
//     resolvers
// });

const server = createServer({
    schema: {
        typeDefs: fs.readFileSync(
            path.join(__dirname, 'movieQL/schema.graphql'),
            'utf8'
        ),
        resolvers
    },
  })

server.start(() => {
    console.log("GraphQL Server Running");
});
