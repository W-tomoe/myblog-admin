import React,{ Component } from 'react';
import navList from '../config/navList'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { NavConf } from '../config/ts-types'
const  SubMenu  = Menu.SubMenu



function renderMenuItems(nav:any):any {
    if(nav.subs && nav.subs.length) {
        renderSubMenus(nav)
    }else {
        return (
            <Menu.Item key={nav.link}>
                <Link to={nav.link}>
                {nav.icon && <Icon type={nav.icon} />}
                <span className='nav-text'>{nav.title}</span>
                </Link>
            </Menu.Item>
        )
    }
}

function renderSubMenus(nav:NavConf):any {
    return (
        <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type={nav.icon}/>
                <span>{nav.title}</span>
              </span>}>
                {
                    renderMenuItems(nav)
                }
        </SubMenu>
    );
}


class MenuList extends Component {
    static propTypes = {
        navList: PropTypes.array,
        mode: PropTypes.string
    }

    render() {
        return (
            <Menu mode='vertical' theme='dark'  className='menu-nav'>
                {navList.map(nav => (
                    renderMenuItems(nav)
                ))}
            </Menu>
        );
    }
}

export default MenuList;