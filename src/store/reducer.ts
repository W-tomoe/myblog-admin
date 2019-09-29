import {  } from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}


export default ( state = defaultState, action:any ) => {
    return state
}
