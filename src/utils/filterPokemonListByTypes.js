function filterPokemonListByTypes (typeFilterList) {
  return pokemon => pokemon.types.find(
    pokemonType => typeFilterList.find(
      ({type, state}) => type === pokemonType && state
    )
  )
}

export default filterPokemonListByTypes
