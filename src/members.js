import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_MEMBERS = gql`
  query Members {
    members {
      id,
      name
    }
  }
`;

const Members = () => 
  <ul>
    <Query
      query={GET_MEMBERS}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.members.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ));
      }}
    </Query>
  </ul>

export default Members;