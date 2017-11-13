const FAKE_POKEMON_LIST = [
  {
    id       : 'pokemon1',
    name     : 'pokemon1',
    avatarURL: 'http://example.com/pokemon1.png',
  },
]

// TODO: remove fake data after release of real API
const API = {
  getPokemonList () {
    console.info('getPokemonList')

    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(FAKE_POKEMON_LIST)
        },
        2000)
    })
  },
}

module.exports = API
