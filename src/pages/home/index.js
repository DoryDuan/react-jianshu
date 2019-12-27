import React, {PureComponent} from 'react'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import homePic from '../../statics/home.png'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Home extends PureComponent {
    backToTop(){
        window.scrollTo(0,0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src={homePic} />
                    <Topic>
                    </Topic>
                    <List>
                    </List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>
                    </Recommend>
                    <Writer>
                    </Writer>
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.backToTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.getHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeSrollTopShow)
    }
    componentWillUnmount(){
        //组件销毁对应事件也要解绑，这个组件的事件就不会影响到其他组件
        window.removeEventListener('scroll',this.props.changeSrollTopShow)
    }
}

const mapStateToProps = (state, ownProps) => ({
    showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getHomeData() {
        dispatch( actionCreators.getHomeList())
    },
    changeSrollTopShow(){
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>100){
            dispatch( actionCreators.toggleTopShow(true))
        }else{
            dispatch( actionCreators.toggleTopShow(false))
        }
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)