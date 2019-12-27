import axios from 'axios'
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const getHomeInfo = (data) => ({
    type: actionTypes.GET_HOME_DATA,
    topicList:data.topicList,
    articlList:data.articlList,
    recommendList:data.recommendList,
    writeList:data.writeList
})

const getMoreInfo = (data,articalPage) => ({
    type: actionTypes.GET_MORE_DATA,
    articlList:fromJS(data),
    articalPage
})

export const toggleTopShow = (show) => ({
    type: actionTypes.SHOW_BACK_TOP,
    show
})

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res)=>{
            const data = res.data.data
            const action = getHomeInfo(data)
            dispatch(action)
        }).catch(()=>{
          console.log('error')
        })
    }
}
export const getMoreData = (articalPage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+articalPage).then((res)=>{
            const data = res.data.data
            const action = getMoreInfo(data,articalPage+1)
            dispatch(action)
        }).catch(()=>{
          console.log('error')
        })
    }
}