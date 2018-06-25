import * as React from 'react';
import './entrance.less';

class Entrance extends React.Component<any, any> {
  public render() {
    return (
      <div className="entrance commonComponet">
        <div className="commonTitle">
          <div className="title">快捷入口</div>
          <img className="setting" src={require('../../assets/img/icon_shezhi2.png')} alt="" />
        </div>
        <div className="entranceComponent flex">
          {
            this.props.entranceData.length > 0 ? this.props.entranceData.map((item: any, index: any) =>
              <div className="entranceItem" key={index} >
                <div className="icon text-center">
                  <img src={item.imgsrc} alt="" />
                </div>
                <div className="title text-center">{item.title}</div>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default Entrance;
