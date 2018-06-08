import * as React from 'react';
class Header extends React.Component<any, any> {
  public render() {
    return (
      <header className="flex">
        <div className={this.props.collapsed ? "logo" : "logo logo-expansion"}>
          <img src={this.props.collapsed ? require('../../assets/img/logo.png') : require('../../assets/img/logo-expansion.png')} alt="" />
        </div>
      </header>
    )
  }
}

export default Header;
