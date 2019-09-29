import React, { Component } from 'react';
import { Layout } from 'antd'

const { Footer } = Layout 

export interface FooterProps {
    
}
 
export interface FooterState {
    
}
 
class FooterWrapper extends React.Component<FooterProps, FooterState> {
    state = { }
    render() { 
        return ( 
            <Footer></Footer>
        );
    }
}
 
export default FooterWrapper;