// import axios from 'axios'
import { ajax  } from 'rxjs/ajax';
import { map, retry } from 'rxjs/operators';
// import { webSocket } from "rxjs/webSocket";

import { 
  API_BASE_URL,
  API_KEY
} from './../config/app.config';

const options = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};


export const subscriptions = {};

export const get = (endpoint) => {
  return ajax.getJSON(API_BASE_URL + endpoint, options).pipe(
    map(results => results)
  )
}

export const post = (endpoint, data, observer) => {

  if(subscriptions[endpoint] !== undefined){
    subscriptions[endpoint].unsubscribe()
  }

  subscriptions[endpoint] = ajax({
    url: API_BASE_URL + endpoint,
    method: 'POST',
    headers: options,
    body: data,
    timeout: 2000,
  }).pipe(
      retry(10)
  ).subscribe(observer);
}

// const subject = webSocket("wss://echo.websocket.org/");

// subject.subscribe(
//    msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
//    err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
//    () => console.log('complete') // Called when connection is closed (for whatever reason).
//  );

// var observer = {
//   next: function(next) {
//     console.log("next",next)
//   },
//   error: function(error) {
//     console.log("error",error);
//   },
//   complete: function() {
//     console.log("complete");
//   }
// }