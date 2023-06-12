function removeElement(array, item) {
  const index = array.indexOf(item)

  if (index !== -1) {
    array.splice(index, 1)
  }

  return array
}

const array =  [1, 2, 3, 4, 5, 6, 7]
const item = 5

const updatedArray = removeElement(array, item)
console.log(updatedArray)


