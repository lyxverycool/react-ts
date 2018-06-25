import * as React from 'react';
import { Menu, Icon } from 'antd';
import NavSlider from "./NavSlider";
import NavSliderCollapsed from "./NavSliderCollapsed";
import navData from "./navText";
const SubMenu = Menu.SubMenu;

class Nav extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSlider: false,//展开时是否显示三级菜单
      showSlideCollapsed: false,//收起时是否显示三级菜单
      openKeys: [],
      navSliderData: {}
    }
    this.navSliderShow = this.navSliderShow.bind(this);
    this.navSliderHide = this.navSliderHide.bind(this);
    this.navSliderCollapsedShow = this.navSliderCollapsedShow.bind(this);
    this.openChange = this.openChange.bind(this);
  }
  navMap(navDatas: any) {
    return (
      navDatas.map((menu: any, index: any) => {
        if (menu.children) {
          return (
            <SubMenu key={menu.key} onMouseEnter={this.navSliderCollapsedShow} onMouseLeave={this.navSliderHide} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}>
              {this.navMap(menu.children)}
            </SubMenu>
          )
        } else {
          return (<Menu.Item key={menu.key} onMouseEnter={this.navSliderShow}>
            <Icon type={menu.icon} />{menu.title}
            <span style={{ display: menu.group.length > 0 ? "inline" : "none" }}><img style={{ display: menu.group.length > 0 ? "inline" : "none" }} src={require('../../assets/img/icon_1.png')} alt="" /></span>
          </Menu.Item >)
        }
      })
    )
  }
  //展开状态
  navSliderShow(menu: any) {
    this.setState({
      showSlider: true
    })
    navData.forEach((navItem: any, index) => {
      const subnav = navItem.children;
      subnav.forEach((nav: any) => {
        if (nav.key === menu.key) {
          this.setState({
            navSliderData: nav
          })
        }
      })
    });
  }
  navSliderHide(menu: any) {
    this.setState({
      showSlider: false,
      showSlideCollapsed: false
    })
  }
  //收起状态
  navSliderCollapsedShow(menu: any) {
    if (this.props.collapsed) {
      navData.forEach((navItem: any, index) => {
        if (navItem.key === menu.key) {
          this.setState({
            showSlideCollapsed: true,
            navSliderData: navItem
          })
        }
      });
    }
  }
  navSelect(SelectParam: any) {
    // console.log(SelectParam)
  }
  navClick(ClickParam: any) {
    //console.log(ClickParam)
  }
  openChange(openKeys: string[]) {
    let key = openKeys;
    if (key.length > 1) {
      key.splice(0, 1)
    }
    if (!this.props.collapsed) {
      this.setState({
        openKeys: key
      });
    } else {
      if (key.length === 0) {
        key = this.state.openKeys
      }
    }
  }
  render() {
    return (
      <div className={this.props.collapsed ? "menu" : "menu menu-expansion"}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          openKeys={this.state.openKeys}
          inlineCollapsed={this.props.collapsed}
          onSelect={this.navSelect}
          onClick={this.navClick}
          onOpenChange={this.openChange}
        >
          {this.navMap(navData)}
        </Menu>
        <NavSlider showSlider={this.state.showSlider && !this.props.collapsed} navSliderData={this.state.navSliderData} />
        <NavSliderCollapsed showSlider={this.state.showSlideCollapsed && this.props.collapsed} navSliderData={this.state.navSliderData} />
      </div>
    );
  }
}

export default Nav;
