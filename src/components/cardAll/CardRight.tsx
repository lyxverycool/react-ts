import * as React from 'react';
import Card from '../common/Card';
import { Row, Col } from 'antd';

class CardRight extends React.Component<any, any> {
  public render() {
    return (
      <Row gutter={20}>
        <Col span={12}>
          <Card cardData={this.props.cardData[2]} />
        </Col>
        <Col span={12}>
          <Card cardData={this.props.cardData[3]} />
        </Col>
      </Row>
    )
  }
}

export default CardRight;
