import * as React from 'react';
import "./backLog.less";

class BackLog extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <div className="backLog commonComponet">
        <div className="commonTitle">
          <div className="title">待办事项</div>
          <img className="setting" src={require('../../assets/img/icon_shezhi2.png')} alt="" />
        </div>
        <div className="backlogItems flex">
          {
            this.props.backLogItems.length > 0 ? this.props.backLogItems.map((item: any, index: any) =>
              <div className="backlogItem flex-1" key={index} >
                <div className="icon  text-center">
                  <img src={item.imgsrc} alt="" />
                </div>
                <div className="number text-center">
                  <span>{item.number}</span>
                  <span>人</span>
                </div>
                <div className="title  text-center">
                  {item.title}
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default BackLog;
