const eventApi = require('./noaaActiveAlerts.js');
const db = require('../../database/utils.js');

let toEventModel = (event) => {
  let eventModel = {};

  eventModel['severity'] = event['properties']['severity'];
  eventModel['expires'] = event['properties']['expires'];
  eventModel['event_type'] = event['properties']['event'];
  eventModel['status'] = event['properties']['status'];
  eventModel['description'] = event['properties']['description'];
  eventModel['instruction'] = event['properties']['instruction'];
  eventModel['headline'] = event['properties']['headline'];

  if(event['geometry']!== null){
    eventModel['coordinates'] = event['geometry']['coordinates'];
  }
  else{
    eventModel['coordinates'] = null;
  }

  return eventModel;
}

