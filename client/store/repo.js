import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_REPO = 'GET_USER'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getRepo = repo => ({type: GET_REPO, repo})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REPO:
      return action.repo
    default:
      return state
  }
}
