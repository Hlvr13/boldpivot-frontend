import { takeLatest, all } from 'redux-saga/effects'

import { HeadlinesTypes } from '../redux/reducers/headlines'
import { SourcesTypes } from '../redux/reducers/sources'
import { watcherGetAllHeadlines, watcherGetEnHeadlines, watcherGetCustomHeadlines } from './headlines'
import { watcherGetAllSources, watcherGetEnSources } from './sources'

export default function * root () {
  yield all([
    // Headlines
    takeLatest(HeadlinesTypes.GET_ALL_HEADLINES, watcherGetAllHeadlines),
    takeLatest(HeadlinesTypes.GET_EN_HEADLINES, watcherGetEnHeadlines),
    takeLatest(HeadlinesTypes.GET_CUSTOM_HEADLINES, watcherGetCustomHeadlines),
    // Sources
    takeLatest(SourcesTypes.GET_ALL_SOURCES, watcherGetAllSources),
    takeLatest(SourcesTypes.GET_EN_SOURCES, watcherGetEnSources)
  ])
}
