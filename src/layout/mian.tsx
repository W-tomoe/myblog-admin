import React,{ Component }  from 'react';
import { Layout } from 'antd'

const { Content } = Layout 


 
class FooterWrapper extends Component{
    state = { }
    render() { 
        return ( 
            <Content style={{ textAlign: 'center' }}>
                这是content
            </Content>
        );
    }
}
 
export default FooterWrapper;