export default `
  type User {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    user: User,
  }

  schema {
    query: Query
  }
`;
