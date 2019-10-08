import React from 'react';
import { TagList } from '../config/ts-types'
import { log } from 'util';
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import { withRouter,RouteComponentProps } from 'react-router-dom'


export interface TagNavProps  extends RouteComponentProps{
    tagList: Array<TagList>
}
 
export interface TagNavState {
    
}
 
class TagNav extends React.Component<TagNavProps, TagNavState> {
    constructor(props: TagNavProps) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props,'props')
    }
    
    render() {
        return (
            <div  className='topbar'>
                <Link to='/' className='topbar-item'>
                    <Icon type="home" className="topbar-item__icon"/>
                </Link>

                <Link to='/list' className='topbar-item'>
                    文章列表
                </Link>
            </div>
        );
    }
}
 
export default withRouter(TagNav);