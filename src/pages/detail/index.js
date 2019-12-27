import React, {PureComponent} from 'react'
import {DetailWrapper,Title,Content} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'

class Detail extends PureComponent {
    render() {
        console.log(this.props)
        return (
            <DetailWrapper>
                <Title>{this.props.title}</Title>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetailData(this.props.location.search.slice(-1));
        // this.props.getDetailData(this.props.match.params.id);
    }
}

const mapStateToProps = (state, ownProps) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getDetailData(id) {
        dispatch( actionCreators.getDetailList(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Detail))