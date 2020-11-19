import gql from "graphql-tag";

const POKEMON_TYPES = gql`
  query PokemonTypes {
    pokemonTypes
  }
`;

export default POKEMON_TYPES;
