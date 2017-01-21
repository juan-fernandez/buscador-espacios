import axios from "axios";

export function fetchSpaces() {
  return function(dispatch){
     dispatch({type:"FETCH_SPACE"});

     axios.get("https://juannodejs.herokuapp.com/spaces")
        .then((response)=>{
           dispatch({type: "FETCH_SPACE_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
           dispatch({type: "FETCH_SPACE_REJECTED", payload: err})
        })
     }
  }
