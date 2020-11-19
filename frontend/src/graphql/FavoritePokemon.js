import gql from "graphql-tag";

const FAVORITE_POKEMON = gql`
  mutation FavoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      name
      isFavorite
    }
  }
`;

export default FAVORITE_POKEMON;
