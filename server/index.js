const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = [`
type Pool {
  id: ID!
  name: String!
}

type Query {
  pools: [Pool]
}

schema {
  query: Query
}`];
const poolNames = ['Masters', 'US Open', 'British Open'];

const pools  = [
  {
    id: 1,
    name: 'Masters',
  },
   {
    id: 2,
    name: 'US Open',
  },
   {
    id: 3,
    name: 'British Open',
  },
]

const resolvers = {
  Query: {
    pools(obj, args) {
       if(args.id){
         return pools.find((pool) => pool.id === args.id);
       }
       return pools;
    }
  },
  // Pool: {
  //   // name(pool){
  //   //   return poolNames[pool.id - 1  ];
  //   // }
  // }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));