import React, {PureComponent} from 'react'
import {RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends PureComponent {
    render() {
        const {recommendList} = this.props
        return (
            <div style={{marginTop: '-4px'}}>
                 {
                    recommendList.map((item)=>(
                        <RecommendItem key={item.get('id')}>
                            <img alt="" src={item.get('imgUrl')} />
                        </RecommendItem>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(
    mapStateToProps,
    null
)(Recommend)