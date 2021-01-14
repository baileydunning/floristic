// const url = 'http://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg'

export const getPlantList = async () => {
  const url = 'http://localhost:8080/https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg'
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

export const getGeocode = async (place) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyBP9sSftzj-CWc5-ignMPWhd9JRTW5r_Js`
  const response = await fetch(url)
  const data = await response.json()
  return data
}