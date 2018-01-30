export default {
  Query: {
    user(_, args, ctx) {
      return {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  }
};
