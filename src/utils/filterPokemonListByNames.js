function filterPokemonListByName (searchStr) {
  return ({name}) => name.toLowerCase().includes(searchStr.toLowerCase())
}

export default filterPokemonListByName
