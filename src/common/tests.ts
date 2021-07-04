import configureMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store'
import { IState } from './intefaces'

const initStore: MockStoreCreator = configureMockStore()
export function mockStore(initialState: IState): MockStoreEnhanced {
  return initStore(initialState)
}
