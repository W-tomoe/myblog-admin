import * as React from 'react';
import { Component } from 'react';
import { Layout, Icon } from 'antd'

import Logo from '../components/logo'

const { Header } = Layout 



export interface Props {
    
}
 
export interface State {
    isFlod: boolean
}


 
class HeaderWrapper extends React.Component<Props, State>{

    public state = {
        isFlod: false
    }
    

    render() {
        return (
            <Header className="header" style={{ background: '#fff', padding: 0 }}>
                <Logo></Logo>
                
                {this.state.isFlod?
                    <Icon type="menu-unfold"/>:<Icon type="menu-fold"/>}
                
            </Header>
        )
    }
}
 
export default HeaderWrapper;