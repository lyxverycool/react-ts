import * as React from 'react';

class Map extends React.Component<any, any> {
  public render() {
    return (
      <div className="map">
        功能地图
        <img src={require('../../assets/img/icon_2.png')} alt="" />
      </div>
    )
  }
}

export default Map;
