import * as React from 'react';
import "./card.less";

class Card extends React.Component<any, any> {
  public render() {
    const cardData = this.props.cardData;
    return (
      <div className="card">
        <div className="cardTop">
          <span className="name">{cardData.number}</span>
          <span className="ren"> 人</span>
          <img src={cardData.imgsrc} alt="" />
        </div>
        <div className={`cardBottom ${cardData.className}`} >
          <img src={require("../../assets/img/icon_jiantou.png")} alt="" />
          <span>{cardData.title}</span>
        </div>
      </div>
    )
  }
}

export default Card;
