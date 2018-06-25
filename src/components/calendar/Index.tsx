import * as React from 'react';
import { Popover, Calendar, Row, Col } from 'antd';
import "./calendar.less";


class IhrCalendar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }
  getContent(item: any) {
    return (
      <div className="content">
        <div className="noticeTitle">
          {item.title}
        </div>
        <div className="noticeFunc">
          <span className="func delet pointer">删除</span>
          <span className="func edit pointer">编辑</span>
          <span className="func finish pointer">完成</span>
        </div>
      </div>
    )
  }
  public render() {
    console.log(this.props.calendarData)
    return (
      <div className="calendar commonComponet">
        <div className="commonTitle">
          <div className="title">日历</div>
          <img className="setting" src={require('../../assets/img/icon_jiantou2.png')} alt="" />
        </div>
        <Calendar fullscreen={false} />
        <div className="commonTitle">
          <div className="title">当日事项</div>
          <img className="setting" src={require('../../assets/img/icon_shezhi2.png')} alt="" />
          <img className="add" src={require('../../assets/img/icon_tianjia.png')} alt="" />
        </div>
        <div className="calendarNotice">
          <div className="matters">
            {
              this.props.calendarData.length > 0 ? this.props.calendarData.map((item: any, index: any) =>
                <Popover overlayClassName="popoverNotice" content={this.getContent(item)} placement="topLeft" key={index}>
                  <Row className="matter matter-normal">
                    <Col className="text-ellipsis" span={20}>{item.title}</Col>
                    <Col span={4} className="status status-normal">{item.type}</Col>
                  </Row>
                </Popover>
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default IhrCalendar;
