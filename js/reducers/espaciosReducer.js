export default function reducer(state={
   spaces: [],
   fetching: false,
   fetched: false,
   error: null
  }, action) {

    switch (action.type) {
      case "FETCH_SPACE": {
        return {
          ...state,
          fetching: true
        }
      }
      case "FETCH_SPACE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          spaces: [...state.spaces,action.payload]
        }
      }
      case "FETCH_SPACE_REJECTED": {
        return {
          ...state,
          fetching: false,
          fetched: false,
          error: action.payload
        }
      }
    }

    return state
}
