import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class Write extends PureComponent {
    render() {
        console.log(this.props.login)
        const { handelLogin, history } = this.props;
        return (
            <div>写文章</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    login: state.getIn(['login', 'login']),
})

export default connect(
    mapStateToProps,
    null
)(Write)