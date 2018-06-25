import * as React from 'react';
import * as Highcharts from 'highcharts';

import "./card.less";

class Report extends React.Component<any, any> {
  componentDidMount() {
    Highcharts.chart(this.props.reportData.title, this.props.reportData);
  }
  public render() {
    return (
      <div className="reportComonent">
        <div id={this.props.reportData.title} className="reportForm" />
      </div>
    )
  }
}

export default Report;
