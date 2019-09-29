import React from 'react'
import { Layout} from 'antd'
import  MenuList  from './Menu'
import HeaderWrapper from './Header'
import tagNav from './tagNav'
const { Sider,  Footer, Content } = Layout

 
class WebLayout  extends React.Component {
    state = { }
    render() {
        return (
            <Layout>
                <HeaderWrapper></HeaderWrapper>
                <Layout>
                    <Sider>
                        <MenuList></MenuList>
                    </Sider>
                    <Content>
                        
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
 
export default WebLayout;