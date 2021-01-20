# f l o r i s t i c

![gif](https://media.giphy.com/media/LfhwOvm2YGVBRxyqvZ/giphy.gif)

## Abstract
`floristic` is an application that allows the user to explore nearly 400,000 plants species by clicking through pages and searching queries. On first load, the data displayed is a list of plant cards, but the user is able to click 'Learn More' on any of the cards and will be redirected to that plant's feature page. The user is also able to add or remove plants to their favorites list which is reflected in their `localStorage`. This data reflected in this application was made accessible by the [Trefle REST API](https://docs.trefle.io/reference). This project was created for the final Mod3 solo project at the Turing School of Software and Design [(see rubric)](https://frontend.turing.io/projects/module-3/binary-challenge.html). Within this repository, the frontend is stored in the `client` folder and the backend is stored in the `proxy` folder.

## How To Access This Application

### [Visit the live site](https://floristic.herokuapp.com/floristic/)

*On your terminal*:

+ `git clone git@github.com:baileydunning/floristic.git`
+ `cd floristic` 
   + Tab #1: `cd client && npm install` > `npm start`
   + Tab #2: `cd proxy && npm install` > `nodemon server.js`

+ `npm test` to run the test suite

![gif2](https://media.giphy.com/media/DRM3jtlkB7htuowXom/giphy.gif)

## Tools / Technologies
+ React (with hooks)
+ React Router
+ React Testing Library / Jest
+ JavaScript
+ Express
+ Node.js
+ SCSS

![gif3](https://media.giphy.com/media/oU1q3biKPfxYcu0WXQ/giphy.gif)

## Next Steps
+ Create more integration tests using reducer in `HomeView`
+ Fix bug with next page button (have to click twice for some reason)
+ Fix bug with localStorage that favorites are occasionally one object behind
+ Style `FeatureView` layout with SCSS

## Created By

[Bailey Dunning](https://www.linkedin.com/in/baileydunning/)

### Project Managers

+ [Will Mitchell](https://github.com/wvmitchell)
+ [Leta Keane](https://github.com/letakeane)


