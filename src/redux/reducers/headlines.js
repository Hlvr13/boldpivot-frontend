import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getAllHeadlines: ['Fields','PropKey'],
    getEnHeadlines: ['Fields','PropKey'],
    getCustomHeadlines: ['Fields', 'ARGS','PropKey'],
    setHeadlineDataToProps: ['Data', 'PropKey'],
})

export const HeadlinesTypes = Types
export const HeadlinesActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    allHeadlines: [],
    enHeadlines: [],
    customHeadlines: [],
})

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

export const setHeadlineDataToProps = (state, action) => {
    const { Data, PropKey } = action
    return state.merge({
        [PropKey]: Data
    })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_ALL_HEADLINES]: null,
    [Types.GET_EN_HEADLINES]: null,
    [Types.GET_CUSTOM_HEADLINES]: null,
    [Types.SET_HEADLINE_DATA_TO_PROPS]: setHeadlineDataToProps,
})
