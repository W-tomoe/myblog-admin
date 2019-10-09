import React from 'react'
export interface LoginProps {
    
}
 
export interface LoginState {
    
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)
        this.state = {

        }
    }

    render() { 
        return (
            <div>这是登录页面</div>
        );
    }
}
 
export default Login;