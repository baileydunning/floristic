export const getPlantList = async (page) => {
  const url = `http://localhost:3001/plants/${page}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPlant = async (id) => {
  const url = `http://localhost:3001/plant/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const searchPlants = async (query, page) => {
  let url = `http://localhost:3001/plants/search/${query}/${page}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}