import React,{ Component } from 'react';
import navList from '../config/navList'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MenuItem,SubMenuItem } from '../config/ts-types'
const  SubMenu  = Menu.SubMenu



function renderMenuItems(nav:any):any {
    if(nav.subs && nav.subs.length > 0) {
        return(
            <SubMenu
                title={
                <span>
                    {nav.icon && <Icon type={nav.icon} />}
                    <span>{nav.title}</span>
                </span>}>
                {
                    
                    nav.subs.map((sub:SubMenuItem) => {
                        console.log(sub,'sub')
                        renderMenuItems(sub)
                    })
                }
            </SubMenu>
        )
    }

    console.log(nav,'nav')

    return (
        <Menu.Item key={nav.link}>
            <Link to={nav.link}>
            {nav.icon && <Icon type={nav.icon} />}
            <span className='nav-text'>{nav.title}</span>
            </Link>
        </Menu.Item>
    )
    
}

// function renderSubMenus(subs:SubMenuItem):any {
//     return (
//         <Menu.Item key={nav.link}>
//             <Link to={nav.link}>
//             <span className='nav-text'>{nav.title}</span>
//             </Link>
//         </Menu.Item>
//     );
// }


class MenuList extends Component {
    static propTypes = {
        navList: PropTypes.array,
        mode: PropTypes.string
    }

    render() {
        return (
            <Menu mode='inline' theme='dark'  className='menu-nav'>
                {navList.map(nav => (
                    renderMenuItems(nav)
                ))}
            </Menu>
        );
    }
}

export default MenuList;