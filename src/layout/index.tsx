import React from 'react'
import { Layout} from 'antd'
import  MenuList  from './Menu'
import HeaderWrapper from './Header'
import TagNav from './tagNav'
import navList from '../config/navList'
import { Route }  from 'react-router-dom'

import Home from '../pages/home'
import List from '../pages/list'
import Authors from '../pages/authors'
import Setting from '../pages/setting'
import Comments from '../pages/comments'
import CreateArticle from '../pages/createArticle'

const { Sider, Content } = Layout

interface WebLayoutState {
    mode: string,
    navList: any
}

interface WebLayoutProps {

}
 
class WebLayout  extends React.Component<WebLayoutProps, WebLayoutState> {
    constructor(props: WebLayoutProps) {
        super(props);
        this.state = {
            mode: 'inline',
            navList: navList
        }
    }


    render() {
        return (
            <Layout>
                <HeaderWrapper></HeaderWrapper>
                <Layout>
                    <Sider width={230} className="sidebar-left">
                        <MenuList></MenuList>
                    </Sider>
                    <Content>
                        <TagNav tagList={[]}></TagNav>

                        <Route path="/" exact component={Home}/>
                        <Route path="/list" exact component={List}/>
                        <Route path="/authors" exact component={Authors}/>
                        <Route path="/comments" exact component={Comments}/>
                        <Route path="/setting" exact component={Setting} />
                        <Route path="/createArticle" exact component={CreateArticle} />
                        
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
 
export default WebLayout;