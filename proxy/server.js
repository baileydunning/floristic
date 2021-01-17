const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()
app.use(express.json())
app.use(cors())

// https://trefle.io/api/v1
// token = w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg

app.locals.data = {"data": [
  {
    "id": 1235714,
    "common_name": "Bailey's acacia",
    "slug": "acacia-baileyana",
    "scientific_name": "Acacia baileyana",
    "year": null,
    "bibliography": "Trans. & Proc. Roy. Soc. Victoria 24: 168 (July 1888)",
    "author": "F.Muell.",
    "status": "accepted",
    "rank": "species",
    "family_common_name": "Pea family",
    "genus_id": 21,
    "image_url": "https://bs.floristic.org/image/o/ce296dd5f630840bd901fe217e96926cd738c625",
    "synonyms": ["Acacia baileyana var. purpurea", "Racosperma baileyanum", "Acacia baileyana var. aurea"],
    "genus": "Acacia",
    "family": "Fabaceae",
    "links":
    {
      "self": "/api/v1/species/acacia-baileyana",
      "plant": "/api/v1/plants/acacia-baileyana",
      "genus": "/api/v1/genus/acacia"
    }
  }
]}

app.set('port', process.env.PORT || 3001)
app.locals.title = 'floristic'

// app.get('/', (request, response) => {
//   const plants = app.locals.plants
//   response.json({ plants })
// })

app.get('/plants/:page', (request, response) => {
  const { page } = request.params
  const url = `https://trefle.io/api/v1/plants?page=${page}&token=w76udTztX_89MySv3fO4fG41HD2yq9xhIRETq1KCXCg`
  // const plants = app.locals.data
  // response.json(plants)
  fetch(url)
  .then(res => res.json())
})




app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});