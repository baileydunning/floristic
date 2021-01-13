export const getPlantList = async () => {
  const url = 'http://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg'
  const response = await fetch(url)
  const data = await response.json()
  return data 
}
