import TypeFilter from './../classes/TypeFilter'

function convertTypesIntoTypeFilterList (types) {
  return types.map(
    type => new TypeFilter(type)
  )
}

export default convertTypesIntoTypeFilterList
