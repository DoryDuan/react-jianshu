import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    topicList:[],
    articlList:[],
    recommendList:[],
    writeList:[],
    articalPage:1,
    showScroll:false
})

const getHomeData = (state,action) =>  {
    return state.merge({
        topicList:fromJS(action.topicList),
        articlList:fromJS(action.articlList),
        recommendList:fromJS(action.recommendList),
        writeList:fromJS(action.writeList)
    })
}

const getMoreData = (state,action) =>  {
    return state.merge({
        articlList:state.get('articlList').concat(action.articlList),
        articalPage:action.articalPage
    })
}

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.GET_HOME_DATA:
            return getHomeData(state,action)
        case actionTypes.GET_MORE_DATA:
            return getMoreData(state,action)
        case actionTypes.SHOW_BACK_TOP:
            return state.set('showScroll',action.show)
        default:
            return state
    }
}