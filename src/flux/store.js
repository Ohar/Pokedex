import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducerSearch from './state/search/reducer'
import reducerPokemonList from './state/pokemonList/reducer'
import reducerTypes from './state/types/reducer'

const reducers = combineReducers({
  search     : reducerSearch,
  pokemonList: reducerPokemonList,
  types      : reducerTypes,
})

const store = createStore(
  reducers,
  applyMiddleware(thunk),
)

export default store
