export const getPlantList = () => {
  return (
    fetch('https://trefle.io/api/v1/plants?token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg')
    .then(data => data.data)
  )
}