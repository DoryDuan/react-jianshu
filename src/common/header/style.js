import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #ccc;
`
export const HeaderLimit = styled.div`
    position:relative;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    display:flex
`
export const Logo = styled.div`
    background:url(${logoPic});
    width:100px;
    height:58px;
    background-size:contain;
`
export const Nav = styled.div`
    flex:1;
    display:flex;
    justify-content:space-between;
`
export const NavLeft = styled.div`
    flex:1;
    display:flex;
`
export const NavRight = styled.div`
    display:flex;
    color:#969696;
`
export const NavItem = styled.div`
    &.active {
        color:#ea6f5a;
    }
    &.pointer{
        cursor:pointer;
    }
    padding:15px;
    line-height:28px;
    font-size:17px;
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    margin-top:10px;
    color:#666;
    &.focused{
        width:240px;
    }
    &::placeholder {
        color:#999;
    }
    &.slide-enter{
        transition: all 0.2s ease-out;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    .zoom {
        position:absolute;
        right:5px;
        top:14px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        font-size:20px;
        text-align:center;
        color:#969696;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const SearchInfo = styled.div`
    z-index:9;
    position:absolute;
    left:0;
    top:58px;
    width:240px;
    padding:15px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`
export const SearchInfoTitle = styled.div`
    line-height:20px;
    margin-bottom:15px;
`
export const SearchInfoSwitch = styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        display: inline-block;
    }
`
export const SearchInfoItem = styled.a`
    font-size:12px;
    border:1px solid #ccc;
    padding:5px 8px;
    margin-right:10px;
    margin-bottom:10px;
    float:left
    color:#787878;
    border-radius:3px;
`

export const BtnGroup = styled.div`
    display:flex;
`
export const Button = styled.div`
    height:38px;
    margin:9px 12px 0;
    padding:0 25px;
    border:1px solid #ec6149;
    border-radius:20px;
    line-height:38px;
    &.reg{
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background:#ec6149;
    }
`