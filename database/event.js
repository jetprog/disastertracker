const Events = require('./collections/users.js');
const Event = require('./models/users.js');

// Save event
exports.saveEvent = (event) => {
  new Event({})
    .save(event, { method: 'insert' })
    .then((saveEvent) => console.log(saveEvent))
    .catch(error => console.log(error))
}

//save coordinates
exports.saveCoordinates = (coordinate) => {
  new Coordinates({})
    .save(coordinate, { method: 'insert' })
    .then((saveCoordinates) => {
      console.log(saveCoordinates)
      //just save
    })
    .catch(error => console.log(error))
}


//save multipolygon
exports.saveMultiPolygon = (multiPolygon) => {
  new MultiPolygon({})
    .save(multipolygon, { method: 'insert' })
    .then((saveMultipolygon) => {
      // console.log(saveMultipolygon);
      //get id from multipolygon pass to polygon and event
      //call savePolygon
    })
    .catch(error => console.log(error))
}

//save polygon
exports.savePolygon = (polygon) => {
  new Polygon({})
    .save(polygon, { method: 'insert' })
    .then((savePolygon) =>{
      // console.log(savePolygon)
      //get polygon id
      //pass id to coordinates table
      //call saveCoordinates
    })
    .catch(error => console.log(error))
}

