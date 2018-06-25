import * as React from 'react';
import { Progress } from 'antd';

class Risk extends React.Component<any, any> {
  public render() {
    return (
      <div className="risk commonComponet">
        <div className="commonTitle">
          <div className="title">风险指数</div>
        </div>
        <div className="riskComponent flex">
          <div className="riskCommon flex-1">
            <div className="riskTop">
              <Progress type="circle" percent={30} width={90} />
            </div>
            <div className="riskBottom text-center">员工信息完整率</div>
          </div>
          <div className="riskCommon flex-1">
            <div className="riskTop riskLevel riskLevelLow">
              <div className="level-1 level" />
              <div className="level-2 level" />
              <div className="level-3 level" />
              <div className="level-4 level" />
              <div className="level-5 level" />
              <div className="risk-level">低</div>
            </div>
            <div className="riskBottom text-center">员工风险等级</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Risk;

