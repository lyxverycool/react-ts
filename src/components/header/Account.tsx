import * as React from 'react';

class Account extends React.Component<any, any> {
  public render() {
    return (
      <div className="account">
        <img src={require('../../assets/img/touxiang.png')} alt="" />
        <span>13183241567</span>
      </div>
    )
  }
}

export default Account;
