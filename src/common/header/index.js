import React, {Component} from 'react'
import {HeaderWrapper, HeaderLimit, Logo,Nav,NavItem,NavLeft,NavRight,BtnGroup,Button,NavSearch,SearchWrapper,
    SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from "./style";
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom'

class Header extends Component {
    getListArea(){
        const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangeClick} = this.props;
        const pageList = []
        const newList = list.toJS()
        const maxIndex = page*10 < newList.length ? page*10 : newList.length
        if(newList.length){
            for(var i=(page-1)*10;i<maxIndex;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{handleChangeClick(page,totalPage,this.spinIcon)}}>
                            <span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div style={{overflow:'hidden'}}>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const {focused,list,login,handIputFocus,handIputBlur,loginOut} = this.props
        return (
        <HeaderWrapper>
            <HeaderLimit>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavLeft>
                        <NavItem className="active">首页</NavItem>
                        <NavItem>下载APP</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch className={focused ? 'focused' : ''}
                                    onFocus = {() => {handIputFocus(list)}}
                                    onBlur = {handIputBlur}
                                />
                            </CSSTransition>
                            <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe617;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </NavLeft>
                    <NavRight>
                        <NavItem>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        {
                            login?<NavItem className="pointer" onClick={loginOut}>退出</NavItem>
                            :<Link to="/login"><NavItem>登录</NavItem></Link>
                        }
                    </NavRight>
                </Nav>
                <BtnGroup>
                    <Button className="reg">注册</Button>
                    {
                        login? <Link to="/write">
                            <Button className="writting"><span className="iconfont">&#xe61d;</span>
                                &nbsp;写文章
                            </Button>
                        </Link>
                        : <Link to="/login">
                        <Button className="writting"><span className="iconfont">&#xe61d;</span>
                            &nbsp;写文章
                        </Button>
                    </Link>
                    }
                </BtnGroup>
            </HeaderLimit>
        </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handIputFocus(list) {
        if(list.size===0){
            dispatch(actionCreators.getList())
        }
        dispatch(actionCreators.searchFocus())
    },
    handIputBlur() {
        dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
        dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
        dispatch(actionCreators.mouseLeave())
    },
    handleChangeClick(page,totalPage,spinIcon){
        let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            originAngle = parseInt(originAngle,10)
        }else{
            originAngle = 0
        }
        spinIcon.style.transform = `rotate(${originAngle+360}deg)`
        if(page<totalPage){
            dispatch(actionCreators.changePage(page+1))
        }else{
            dispatch(actionCreators.changePage(1))
        }
    },
    loginOut(){
        dispatch(loginActionCreators.changeLogin(false))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)