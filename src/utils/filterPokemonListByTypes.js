import TYPE_ALL_FILTER from './../consts/TYPE_ALL_FILTER'

function filterPokemonListByTypes (typeFilter) {
  return pokemon => pokemon.types
    .find(type => type === typeFilter || TYPE_ALL_FILTER === typeFilter)
}

export default filterPokemonListByTypes
