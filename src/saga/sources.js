import { put } from 'redux-saga/effects'
import { SourcesActions } from '../redux/reducers/sources'
import api from '../utils/api'

export function* watcherGetAllSources(action) {
    const { PropKey = 'allSources' } = action
    try {
        // TODO: Available Fields: name, country, category, description, id
        const _resp = yield api.gql('getAllSources', 'id')
        if (_resp && _resp.status === 200) {
            const { data: { data: { getAllSources: sources } } } = _resp
            yield put(SourcesActions.setSourcesDataToProps(sources, PropKey))
        } else {
            console.error('Error => ', _resp)
        }
    } catch (error) {
        console.error('Error => ', error)
    }
}

export function* watcherGetEnSources(action) {
    const { PropKey = 'enSources' } = action
    try {
        // TODO: Available Fields: name, country, category, description, id
        const _resp = yield api.gql('getEnSources', 'id')
        if (_resp && _resp.status === 200) {
            const { data: { data: { getEnSources: sources } } } = _resp
            yield put(SourcesActions.setSourcesDataToProps(sources, PropKey))
        } else {
            console.error('Error => ', _resp)
        }
    } catch (error) {
        console.error('Error => ', error)
    }
}