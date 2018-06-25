import * as React from 'react';

class FuncBtn extends React.Component<any, any> {
  public render() {
    return (
      <div className="funcBtn flex">
        <div className="func">
          <img src={require('../../assets/img/icon_jiaocheng.png')} alt="" />
        </div>
        <div className="func">
          <img src={require('../../assets/img/icon_bangzhu.png')} alt="" />
        </div>
        <div className="func">
          <img src={require('../../assets/img/icon_app.png')} alt="" />
        </div>
        <div className="func">
          <img src={require('../../assets/img/icon_lianxi.png')} alt="" />
        </div>
        <div className="func">
          <img src={require('../../assets/img/icon_tongzhi.png')} alt="" />
        </div>
      </div>
    )
  }
}

export default FuncBtn;
