export default function reducer(state={
   spaces: [],
   fetching: false,
   fetched: false,
   error: null,
   searches: []
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
      case "NEW_SPACE_SEARCH": {
        return {
          ...state,
          fetching: true
        }
      }
      case "NEW_SPACE_SEARCH_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          searches: [...state.searches,action.payload]
        }
      }
      case "NEW_SPACE_SEARCH_REJECTED": {
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
