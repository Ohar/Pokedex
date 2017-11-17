import PAGE_SIZE from './../consts/PAGE_SIZE'

export default function countPageSliceIndexes (page, max) {
  const first = (page - 1) * PAGE_SIZE
  const last  = Math.min(max - 1, first + PAGE_SIZE)

  return {first, last}
}
