import * as React from 'react';
import Map from './Map';
import Account from './Account';
import FuncBtn from './FuncBtn';
import "./header.less";

class Header extends React.Component<any, any> {
  public render() {
    return (
      <header className="flex">
        <div className={this.props.collapsed ? "logo" : "logo logo-expansion"}>
          <img src={this.props.collapsed ? require('../../assets/img/logo.png') : require('../../assets/img/logo-expansion.png')} alt="logo" />
        </div>
        <div className={this.props.collapsed ? "header" : "header header-expansion"}>
          <div className="companyName">
            <span>上海利唐信息科技</span>
            <img src={require('../../assets/img/icon_renzheng.png')} alt="徽章" />
          </div>
          <Map />
          <Account />
          <FuncBtn />
        </div>
      </header>
    )
  }
}

export default Header;
