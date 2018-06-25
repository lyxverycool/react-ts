import * as React from 'react';

// import { Calendar } from 'antd';
class IhrCalendar extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <main className="homePage">
        {/* <Calendar /> */}
        <div className="fieldConfig">
          <div className="configTop">
            <span className="title">配置设置</span>
            <span className="note">（色块区域为当前显示项，拖动便签可显示顺序）</span>
          </div>
          <div className="configBottom flex">
            <div className="fieldItem fieldShow">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem fieldShow">
              <div className="field">薪资员工</div>
            </div>
            <div className="fieldItem fieldShow">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem fieldShow">
              <div className="field">薪资员工</div>
            </div>
            <div className="fieldItem fieldShow">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem fieldShow">
              <div className="field">薪资员工</div>
            </div>
            <div className="fieldItem">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem">
              <div className="field">薪资员工</div>
            </div>
            <div className="fieldItem">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem">
              <div className="field">薪资员工</div>
            </div>
            <div className="fieldItem">
              <div className="field">最多显示呵呵</div>
            </div>
            <div className="fieldItem">
              <div className="field">薪资员工</div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
export default IhrCalendar;


