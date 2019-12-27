import axios from 'axios'
import * as actionTypes from './actionTypes'

export const changeLogin = (isLogin) => ({
    type: actionTypes.CHANGE_LOGIN,
    login:isLogin
})

export const login = (account,password,history) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result = res.data.data;
            if(result){
                const action = changeLogin(true)
                dispatch(action)
                history.push('/');
            }else{
                console.log('登录失败')
            }
        }).catch(()=>{
          console.log('error')
        })
    }
}