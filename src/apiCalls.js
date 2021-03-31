export const getPlantList = async (page) => {
  const url = `https://floristic-api.herokuapp.com/plants/${page}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPlant = async (id) => {
  const url = `https://floristic-api.herokuapp.com/plant/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const searchPlants = async (query, page) => {
  let url = `https://floristic-api.herokuapp.com/plants/search/${query}/${page}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}