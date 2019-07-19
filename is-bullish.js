function isBullish (sequence) {
  const numElements = sequence.length

  // Handle edge case of zero or one element.
  if (numElements < 2) return false

  const halfNumElements = Math.floor(numElements / 2)

  const sum = (a, b) => (a + b)

  const firstSliceMean = sequence.slice(0, halfNumElements).reduce(sum, 0) / halfNumElements
  const secondSliceMean = sequence.slice(halfNumElements, numElements).reduce(sum, 0) / (numElements - halfNumElements)

  return firstSliceMean < secondSliceMean
}

module.exports = exports.default = isBullish
