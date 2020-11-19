import gql from "graphql-tag";

const UNFAVORITE_POKEMON = gql`
  mutation UnFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      name
      isFavorite
    }
  }
`;

export default UNFAVORITE_POKEMON;
