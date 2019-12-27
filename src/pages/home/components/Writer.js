import React, {PureComponent} from 'react'
import {WriterTitle,WriteSwitch,WriterItem} from '../style'
import {connect} from 'react-redux'

class Writer extends PureComponent {
    render() {
        const {writeList} = this.props
        return (
            <div>
                <WriterTitle>
                    推荐作者
                    <WriteSwitch>
                        <span className="iconfont spin">&#xe851;</span>
                        换一批
                    </WriteSwitch>
                </WriterTitle>
                {
                    writeList.map((item)=>(
                        <WriterItem key={item.get('id')}>
                        <img className="pic" alt="" src={item.get('imgUrl')} />
                        <div className="desc">
                            <p>{item.get('writer')}</p>
                            <p className="info">写了{item.get('fontCount')}k字 · {item.get('likeCount')}喜欢</p>
                        </div>
                        <div className="atten">
                            +关注
                        </div>
                    </WriterItem>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    writeList: state.getIn(['home', 'writeList'])
})

export default connect(
    mapStateToProps,
    null
)(Writer)