

export const getPlantList = async () => {
  const url = 'http://localhost:8080/https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg'
  const response = await fetch(url)
  const data = await response.json()
  return data 
}

// export const getPlantDetails = (endpoint) => {
//   return (
//     fetch(`https://trefle.io${endpoint}?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`)
//       .then(response => response.json())
//   )
// }

//NASA API KEY: v6dcyakOw4PSo43KWEFvueNUFVpuyWMZJ2cHbXEh