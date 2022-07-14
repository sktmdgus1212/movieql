import { people } from "./db/db";

const resolvers = {
    Query: {
        people: () => people
    }
}


export default resolvers;