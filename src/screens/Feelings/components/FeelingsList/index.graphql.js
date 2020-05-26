import gql from 'graphql-tag';

export const GET_FEELINGS = gql`
    query GetAllFeelings{
        getAllFeelings{
            title
            icon
        }
    }
`;
