import { configureStore } from '@reduxjs/toolkit'
// import localStorage from '../utils/localStorage'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from './slices'
import { combineReducers } from '@reduxjs/toolkit'

// export default configureStore()
const rootReducer = combineReducers(reducers)
export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'pageReducer'], //Things u want to persist
  blacklist: [], //Things u dont
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = configureStore({reducer: persistedReducer})
export let persistor = persistStore(store)

// export default { store, persistor }
