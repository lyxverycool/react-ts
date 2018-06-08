/**
 * @component reducers
 * @description Home Reducer 高阶函数
 * @time 2018/1/9
 * @author ***
 */

import * as Constants from '../constants/actionsTypes';


const initialState = {
    name: '111', //姓名
    hello: '111', 
    action: '111'
}

// 初始化
const homeReducer = (state = initialState, action:any) => {
    console.log(action.type);
    switch(action.type) {
        // case Constants.CHANGE_NAME:
        //     return {...state, ...{name: action.value}};
        case Constants.CHANGE_HELLO:
            return {...state, ...{hello: action.path}};
        // case Constants.CHANGE_HELLO:
        //     return {...state, ...{action: action.data}};
        default:
            return state;
    }
}

export { homeReducer };