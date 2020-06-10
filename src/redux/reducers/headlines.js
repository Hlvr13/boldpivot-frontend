import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getAllHeadlines: ['Fields', 'PropKey'],
  getEnHeadlines: ['Fields', 'PropKey'],
  getCustomHeadlines: ['Fields', 'ARGS', 'PropKey'],
  setToFavorite: ['Index', 'Id'],
  setHeadlineDataToProps: ['Data', 'PropKey']
})

export const HeadlinesTypes = Types
export const HeadlinesActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  allHeadlines: [],
  enHeadlines: [],
  customHeadlines: []
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const setHeadlineDataToProps = (state, action) => {
  const { Data, PropKey } = action
  const updatedDate = PropKey.toLowerCase().includes('headline') ? [...Data].map(d => ({ ...d, fav: false })) : Data

  return state.merge({
    [PropKey]: updatedDate
  })
}

export const setToFavorite = (state, action) => {
  const { customHeadlines } = state
  const { Index, Id } = action

  const i = Id ? customHeadlines.findIndex(headline => headline.id === Id) : Index

  const updatedHeadlines = [...customHeadlines]
  updatedHeadlines[i] = {
    ...customHeadlines[i],
    fav: !customHeadlines[i].fav
  }

  return state.merge({
    customHeadlines: updatedHeadlines
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ALL_HEADLINES]: null,
  [Types.GET_EN_HEADLINES]: null,
  [Types.GET_CUSTOM_HEADLINES]: null,
  [Types.SET_TO_FAVORITE]: setToFavorite,
  [Types.SET_HEADLINE_DATA_TO_PROPS]: setHeadlineDataToProps
})
