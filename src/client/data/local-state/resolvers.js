import {detailsQuery} from '../queries'

export default {
  Mutation: {
    toggleLastName: (_, variables, { cache }) => {
      const {details} = cache.readQuery({query: detailsQuery})
      const data = {
        details: {
          __typename: 'Details',
          showLastName: !details.showLastName
        },
      };
      cache.writeData({ data });
      return null
    },
  }
}
