export const getPlantList = async () => {
  const response = await fetch(
    'https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg'
  )
  const data = await response.json()
  return data
}

// export const getPlantDetails = (endpoint) => {
//   return (
//     fetch(`https://trefle.io${endpoint}?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`)
//       .then(response => response.json())
//   )
// }