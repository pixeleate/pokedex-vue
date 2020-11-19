import gql from "graphql-tag";

const POKEMONS = gql`
  query Pokemons($limit: Int, $offset: Int) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      limit
      count
      offset
      edges {
        id
        image
        name
        types
        isFavorite
      }
    }
  }
`;

export default POKEMONS;
