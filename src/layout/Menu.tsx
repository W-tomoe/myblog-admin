import React,{ Component } from 'react';
import navList from '../config/navList'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MenuItem,SubMenuItem } from '../config/ts-types'
const  SubMenu  = Menu.SubMenu



function renderMenu(list:any) {
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
                        {renderMenu(nav.children)}
                    </SubMenu>
                )
            }else {
                return (
                    <Menu.Item key={nav.link} >
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



class MenuList extends Component {
    static propTypes = {
        navList: PropTypes.array,
        mode: PropTypes.string
    }

    render() {
        return (
            <Menu  multiple={false} mode='inline' theme='dark'  className='menu-nav'>
                {renderMenu(navList)}
            </Menu>
        );
    }
}

export default MenuList;