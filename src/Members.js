import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Member = () => <div>
  <ul>
    <Query
      query={gql`
        {
          members {
            id,
            name
          }
        }
      `}
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
</div>

export default Member;