/**
 * @component reducers
 * @description Home RootReducer
 * @time 2018/1/9
 * @author ***
 */

import { combineReducers } from 'redux'; // 连接reducers
import { homeReducer } from './home';

const rootReducer = combineReducers({
     homeReducer
})

export default rootReducer;


