import * as React from 'react';
import { Icon, Breadcrumb } from 'antd';
// import IExpansionProps from '../../Interface/components/Expansion';
class WorkbenchTitle extends React.Component<any, any> {
  toggleCollapsed = () => {
    this.props.onChangeCollapsed(!this.props.collapsed)
  }
  public render() {
    return (
      <div className="workbenchTitle flex">
        <div className={this.props.collapsed ? "menuCollapsed" : "menuCollapsed menuCollapsed-expansion"} onClick={this.toggleCollapsed}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <div className="title flex">
          <Breadcrumb style={{ lineHeight: "30px" }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <span>欢迎回来，小i提醒您</span>
          <span className="warn-info">
            有48个审批待归档
          </span>
          <span>，</span>
          <span className="notice-info">
            23条提醒待处理
          </span>
        </div>
      </div>
    )
  }
}

export default WorkbenchTitle;
