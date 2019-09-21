import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MEMBERS = gql`
  query Members {
    members {
      id,
      name
    }
  }
`;

const Members = () => {
  const { loading, error, data } = useQuery(GET_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const { members } = data;

  return (
    members.map(({ name, id }) => <p key={id}>{name}</p> )
  )
}
  
export default Members;