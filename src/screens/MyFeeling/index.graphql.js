import gql from 'graphql-tag';

export const FEELING_DETAIL = gql`
  query FeelingDetail($id: Int) {
    feelingDetail(id: $id) {
      title
      icon
      description
    }
  }
`;
