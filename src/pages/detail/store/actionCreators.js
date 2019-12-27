import axios from 'axios'
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const getDetailInfo = (data) => ({
    type: actionTypes.GET_DETAIL_DATA,
    title:data.title,
    content:data.content
})

export const getDetailList = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const data = res.data.data
            const action = getDetailInfo(data)
            dispatch(action)
        }).catch(()=>{
          console.log('error')
        })
    }
}