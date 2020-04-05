function isBullish (sequence) {
  const numElements = sequence.length

  // Handle edge case of zero or one element.
  if (numElements < 2) return false

  // If last value is lower than first value it will return false.

  const firstElement = sequence[0]
  const lastElement = sequence[numElements - 1]

  if (lastElement < firstElement) return false

  // Otherwise it compares the mean of the first half and compares it to the mean of second half.

  const halfNumElements = Math.floor(numElements / 2)

  const sum = (a, b) => (a + b)

  const firstSliceMean = sequence.slice(0, halfNumElements).reduce(sum, 0) / halfNumElements
  const secondSliceMean = sequence.slice(halfNumElements, numElements).reduce(sum, 0) / (numElements - halfNumElements)

  return firstSliceMean < secondSliceMean
}

module.exports = exports.default = isBullish
