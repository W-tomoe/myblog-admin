import * as React from "react";
import { Layout, Icon, Avatar, Badge, Popover, List } from "antd";
import { Link } from "react-router-dom";

import Logo from "../components/logo";

const { Header } = Layout;

interface Props {}

interface State {
  isFlod: boolean;
  loginTip: string;
}

class HeaderWrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFlod: false,
      loginTip: "欢迎您，wong"
    };

    this.foldMenu = this.foldMenu.bind(this);
  }

  // 折叠菜单
  foldMenu() {
    this.setState({
      isFlod: !this.state.isFlod
    });
  }

  render() {
    return (
      <Header
        className="header clearfix"
        style={{ background: "#fff", padding: 0 }}
      >
        <div className="f-l clearfix">
          <Logo></Logo>
          {this.state.isFlod ? (
            <Icon
              type="menu-unfold"
              className="f-l menu-fold m-l-10 curson-p"
              onClick={this.foldMenu}
            />
          ) : (
            <Icon
              type="menu-fold"
              className="f-l menu-fold m-l-10 curson-p"
              onClick={this.foldMenu}
            />
          )}
        </div>

        <ul className="header-right  clearfix">
          <li>
            <a
              className="curson-p"
              href="https://github.com/W-tomoe/myblog-admin"
            >
              <Icon type="github" />
            </a>
          </li>

          <li>
            <Popover
              overlayClassName="navbar-popup"
              placement="bottomRight"
              title={this.state.loginTip}
              content={<UserDropDown />}
              trigger="click"
            >
              <Badge dot>
                <Avatar
                  shape="circle"
                  src={require("../assets/images/avatar.png")}
                />
              </Badge>
            </Popover>
          </li>
        </ul>
      </Header>
    );
  }
}

const UserDropDown = (props: Props) => (
  <ul className="dropdown-menu list-group dropdown-persist">
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="mail"/> 信息
        <Badge count={5} className="label" />
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="bell" /> 通知
      </a>
    </li>
    <li className="list-group-item">
      <a className="animated animated-short fadeInUp">
        <Icon type="setting" /> 帐户设置
      </a>
    </li>
    <li className="list-group-item dropdown-footer">
      <Link to="/login">
        <Icon type="poweroff" /> 退出
      </Link>
    </li>
  </ul>
);

export default HeaderWrapper;
