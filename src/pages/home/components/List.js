import React, {PureComponent} from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {
    render() {
        const {articlList,articalPage,getMoreData} = this.props
        return (
            <div>
                 {
                    articlList.map((item,index)=>(
                        <Link key={index} to={"/detail?id="+item.get('id')} >
                        {/* <Link key={index} to={"/detail/"+item.get('id')} > */}
                            <ListItem> 
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">
                                    {item.get('desc')}
                                    </p>
                                </ListInfo>
                                <img alt="" className="pic" src={item.get('imgUrl')}/>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>{getMoreData(articalPage)}}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    articlList: state.getIn(['home', 'articlList']),
    articalPage: state.getIn(['home', 'articalPage'])
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    getMoreData(articalPage) {
        dispatch( actionCreators.getMoreData(articalPage))
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)