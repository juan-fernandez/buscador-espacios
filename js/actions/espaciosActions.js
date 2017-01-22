import axios from "axios";

export function fetchSpaces() {
  return function(dispatch){
     dispatch({type:"FETCH_SPACE"});

     axios.get("https://buscador-espacios-backend.herokuapp.com/spaces?")
        .then((response)=>{
           dispatch({type: "FETCH_SPACE_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
           dispatch({type: "FETCH_SPACE_REJECTED", payload: err})
        })
     }
  }

export function new_space_search(new_event){
   return function(dispatch){
      dispatch({type:"NEW_SPACE_SEARCH"});
      var querystring = require('querystring');
      axios.get("https://buscador-espacios-backend.herokuapp.com/spaces?"+querystring.stringify(new_event))
      .then((response)=>{
         dispatch({type: "NEW_SPACE_SEARCH_FULFILLED", payload: response.data})
      })
      .catch((err)=>{
         dispatch({type: "NEW_SPACE_SEARCH_REJECTED", payload: err})
      })
      }
}
