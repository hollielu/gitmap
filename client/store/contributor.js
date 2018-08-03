import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CONTRIBUTORS_LOCATIONS = 'GET_CONTRIBUTORS_LOCATIONS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const setContributorsLocations = locations => ({
  type: GET_CONTRIBUTORS_LOCATIONS,
  locations
})

/**
 * THUNK CREATORS
 */
export const getContributorsLocations = input => async dispatch => {
  try {
    const {owner, repo} = input
    const {data} = await axios.get(`/api/repos/${owner}/${repo}/contributors`)

    let locations = []

    for (let i = 0; i < data.length; i++) {
      let res = await axios.get(`/api/users/${data[i]}/location`)
      if (res.data) locations.push(res.data)
    }

    dispatch(setContributorsLocations(locations))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTRIBUTORS_LOCATIONS:
      return action.locations
    default:
      return state
  }
}
