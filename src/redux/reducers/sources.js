import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getAllSources: ['PropKey'],
  getEnSources: ['PropKey'],
  setSourcesDataToProps: ['Data', 'PropKey']
})

export const SourcesTypes = Types
export const SourcesActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  allSources: [],
  enSources: []
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const setSourcesDataToProps = (state, action) => {
  const { Data, PropKey } = action
  return state.merge({
    [PropKey]: Data
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_SOURCES]: null,
  [Types.GET_EN_SOURCES]: null,
  [Types.SET_SOURCES_DATA_TO_PROPS]: setSourcesDataToProps
})
