import styled from 'styled-components'

export const LoginWrapper = styled.div`
    background:#eee;
    position:absolute;
    top:58px;
    left:0;
    right:0;
    bottom:0;
`
export const LoginBox = styled.div`
    width:350px;
    margin:180px auto;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,0.1);
    padding: 50px 50px 30px;
    box-sizing:border-box;
`
export const SwitchWrapper = styled.div`
    margin-bottom:30px;
    box-sizing:content-box;
    text-align:center;
`
export const SwitchItem = styled.span`
    padding: 10px;
    color: #969696;
    font-size:17px;
    cursor:pointer;
    margin:0 10px;
    &.active{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`
export const Input = styled.input`
    width:100%;
    height:36px;
    color:#777;
    border: 1px solid #c8c8c8;
    padding:0 10px;
    &.name{
        border-bottom: none;
        border-radius: 4px 4px 0 0;
    }
    &.password{
        border-radius: 0 0 4px 4px;
    }
`

export const Button = styled.div`
    width:100%;
    line-height:36px;
    background: #3194d0;
    margin-top:20px;
    border:none;
    border-radius: 25px;
    color:#fff;
    text-align:center
`