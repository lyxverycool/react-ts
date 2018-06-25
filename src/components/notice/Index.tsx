import * as React from 'react';
import { Row, Col } from 'antd';

class Notice extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      noticeSelect: "message"
    }
  }
  onSelect(type: string) {
    const noticeType = {
      noticeSelect: type
    };
    this.setState(noticeType)
  }
  public render() {
    return (
      <div className="notice commonComponet">
        <Row gutter={20} className="noticeTitle">
          <Col span={12} className={this.state.noticeSelect === 'message' ? "text-center title noticeSelect" : "text-center title"} onClick={this.onSelect.bind(this, "message")}>
            系统消息
            </Col>
          <Col span={12} className={this.state.noticeSelect === 'notice' ? "text-center title noticeSelect" : "text-center title"} onClick={this.onSelect.bind(this, "notice")} >
            公司公告
            </Col>
        </Row>
        <div className="noticeContent">
          <div className="lists">
            {
              this.state.noticeSelect === 'message' && this.props.noticeData.message.length > 0 ? this.props.noticeData.message.map((item: any, index: any) =>
                <div className="list pointer flex" key={index}>
                  <div className="listDetail text-ellipsis">{item.title}</div>
                  <div className="time">{item.time}</div>
                </div>
              ) : null
            }
            {
              this.state.noticeSelect === 'notice' && this.props.noticeData.notice.length > 0 ? this.props.noticeData.notice.map((item: any, index: any) =>
                <div className="list pointer flex" key={index}>
                  <div className="listDetail text-ellipsis">{item.title}</div>
                  <div className="time">{item.time}</div>
                </div>
              ) : null
            }
          </div>
          <div className="more text-right">
            <span className="pointer">查看更多</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Notice;
