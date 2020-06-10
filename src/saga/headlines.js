import { put } from 'redux-saga/effects'
import { HeadlinesActions } from '../redux/reducers/headlines'
import api from '../utils/api'

export function* watcherGetAllHeadlines(action) {
    const { Fields = 'title', PropKey = 'allHeadlines' } = action
    try {
        // TODO: Available Fields => title, url, urlToImage, source{ id, name }, description, publishedAt, id
        const _resp = yield api.gql('getAllHeadlines', Fields)
        if (_resp && _resp.status === 200) {
            const { data: { data: { getAllHeadlines: headlines } } } = _resp
            yield put(HeadlinesActions.setHeadlineDataToProps(headlines, PropKey))
        } else {
            console.error('Error => ', _resp)
        }
    } catch (error) {
        console.error('Error => ', error)
    }
}

export function* watcherGetEnHeadlines(action) {
    const { Fields = 'title', PropKey = 'enHeadlines' } = action
    try {
        // TODO: Available Fields => title, url, urlToImage, source{ id, name }, description, publishedAt, id
        const _resp = yield api.gql('getEnHeadlines', Fields)
        if (_resp && _resp.status === 200) {
            const { data: { data: { getEnHeadlines: headlines } } } = _resp
            yield put(HeadlinesActions.setHeadlineDataToProps(headlines, PropKey))
        } else {
            console.error('Error => ', _resp)
        }
    } catch (error) {
        console.error('Error => ', error)
    }
}

export function* watcherGetCustomHeadlines(action) {
    const { Fields = 'title', ARGS = 'language: "en"', PropKey = 'customHeadlines' } = action
    try {
        // TODO: Available Fields => title, url, urlToImage, source{ id, name }, description, publishedAt, id
        // TODO: Available ARGS => sources, q, category, language, country
        const _resp = yield api.gql('getCustomHeadlines', Fields, ARGS)
        if (_resp && _resp.status === 200) {
            const { data: { data: { getCustomHeadlines: headlines } } } = _resp
            yield put(HeadlinesActions.setHeadlineDataToProps(headlines, PropKey))
        } else {
            console.error('Error => ', _resp)
        }
    } catch (error) {
        console.error('Error => ', error)
    }
}