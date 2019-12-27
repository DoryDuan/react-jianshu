import React, {PureComponent} from 'react'
import {LoginWrapper,LoginBox,Input,Button,SwitchWrapper,SwitchItem} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Login extends PureComponent {
    render() {
        const { handelLogin, history } = this.props;
        return (
            <LoginWrapper>
                <LoginBox>
                    <SwitchWrapper>
                        <SwitchItem className="active">登录</SwitchItem>
                        <SwitchItem>注册</SwitchItem>
                    </SwitchWrapper>
                    <div>
                        <Input className="name" placeholder="账号" 
                            ref = {(input)=>{this.account = input}}
                        />
                        <Input className="password" placeholder="密码" type="password"
                            ref = {(input)=>{this.password = input}}
                        />
                    </div>
                    <Button onClick={()=>{handelLogin(this.account,this.password,history)}}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handelLogin(account,password,history) {
        dispatch(actionCreators.login(account.value,password.value,history))
    }
})

export default connect(
    null,
    mapDispatchToProps
)(Login)