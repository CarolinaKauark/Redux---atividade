import { combineReducers } from 'redux';
import professionalReducer from './reducerProfessional';
import personalReducer from './reducerPersonal';

const rootReducer = combineReducers({ personalReducer, professionalReducer });

export default rootReducer;
