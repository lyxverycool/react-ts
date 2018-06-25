import * as React from 'react';
import Report from '../common/Report';
const config = {
  title: "test1",
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      }
    }
  },
  series: [{
    type: 'pie',
    name: '浏览器占比',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['其他', 0.7]
    ]
  }]
};

class ReportPie extends React.Component<any, any> {
  public render() {
    return (
      <div className="report commonComponet">
        <div className="commonTitle">
          <div className="title">人员构成分析</div>
          <img className="setting" src={require('../../assets/img/icon_shezhi2.png')} alt="" />
        </div>
        <Report reportData={config} />
      </div>
    )
  }
}

export default ReportPie;
