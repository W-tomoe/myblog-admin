import React from 'react';
import navList from '../config/navList'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MenuItem,SubMenuItem } from '../config/ts-types'
import { RouteComponentProps } from "react-router-dom"
const  SubMenu  = Menu.SubMenu




interface MenuListProps extends RouteComponentProps{
    
}


interface MenuListState {
    
}

class MenuList extends React.Component<MenuListProps,MenuListState> {
    constructor(props:MenuListProps) {
        super(props)
    }

    private renderMenu(list:any) {
        return (
            list.map((nav:any):any => {
                if(nav.children) {
                    return (
                        <SubMenu key={nav.link} title={
                            <span>
                                <Icon type={nav.icon}></Icon>
                                <span>{nav.title}</span>
                            </span>
                        }>
                            {this.renderMenu(nav.children)}
                        </SubMenu>
                    )
                }else {
                    return (
                        <Menu.Item key={nav.link}>
                            <Link to={nav.link}>
                                {nav.icon && <Icon type={nav.icon}></Icon>}
                                <span>{nav.title}</span>
                            </Link>
                        </Menu.Item>
                    )
                }
            })
        )
    }

    getSelectedMenuKeys() {
        const {
            location: { pathname }
        } = this.props;
        return pathname?[pathname]:[]
    }
    
    private onMenuSelectChange(arg:any) {
        console.log(arg,'openKeys')
    }

    public render() {
        return (
<<<<<<< HEAD
            <Menu selectedKeys={this.getSelectedMenuKeys()}
              multiple={false}  
              mode='inline' 
              theme='dark'  
              className='menu-nav'>
                {this.renderMenu(navList)}
=======
            <Menu  multiple={false} mode='inline' theme='dark'  className='menu-nav'>
                {renderMenu(navList)}
>>>>>>> refs/remotes/origin/master
            </Menu>
        );
    }
}

export default withRouter(MenuList);