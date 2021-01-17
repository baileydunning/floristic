// export const getPlantList = async (page) => {
//   const url = `http://localhost:8080/https://trefle.io/api/v1/plants?page=${page}&token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
//   const response = await fetch(url)
//   const data = await response.json()
//   return data
// }

export const getPlantList = async (page) => {
  const url = `http://localhost:3001/plants/${page}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPlant = async (id) => {
  const url = `http://localhost:8080/https://trefle.io/api/v1/plants/${id}?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getLocations = async () => {
  let url = `http://localhost:8080/https://trefle.io/api/v1/distributions?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPlantsByLocation = async (slug) => {
  let url = `http://localhost:8080/https://trefle.io/api/v1/distributions/${slug}/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const searchPlants = async (query) => {
  let url = `http://localhost:8080/https://trefle.io/api/v1/plants/search?q=${query}&token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
  const response = await fetch(url)
  const data = await response.json()
  return data
}