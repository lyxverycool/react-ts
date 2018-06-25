/**
 * @component reducers
 * @description Home Reducer 高阶函数
 * @time 2018/1/9
 * @author ***
 */

import * as Constants from '../constants/actionsTypes';
import ILIST from '../actions/home';


const initialState = {
    test: "111"
}

// 初始化
const homeReducer = (state = initialState, action: ILIST) => {
    switch (action.type) {
        case Constants.GET_LIST:
            return action.data;
        default:
            return state;
    }
}

export { homeReducer };