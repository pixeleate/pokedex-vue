import gql from "graphql-tag";

const POKEMON_BY_NAME = gql`
  query PokemonByName($name: String!) {
    pokemonByName(name: $name) {
      name
      image
      types
      sound
      evolutions {
        id
        image
        name
      }
    }
  }
`;

export default POKEMON_BY_NAME;
