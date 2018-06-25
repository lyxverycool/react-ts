import * as React from 'react';
class NavSlider extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSlider: false,
    }
    this.navSliderShow = this.navSliderShow.bind(this);
    this.navSliderHide = this.navSliderHide.bind(this);
  }
  navSliderShow(menu: any) {
    this.setState({
      showSlider: true
    })
  }
  navSliderHide(menu: any) {
    this.setState({
      showSlider: false
    })
  }
  render() {
    const showSlider = this.state.showSlider || this.props.showSlider;
    const navSliderData = this.props.navSliderData;
    const navSliderDataGroup = this.props.navSliderData.group || [];
    let renderNav;
    if (navSliderDataGroup.length > 0) {
      renderNav = (
        <div className={showSlider ? "navSlider sliderShow" : "navSlider sliderHide"} onMouseEnter={this.navSliderShow} onMouseLeave={this.navSliderHide}>
          <div className="title">
            <img src={require("../../assets/img/apply.png")} alt="" />
            <span>{navSliderData.title}</span>
          </div>
          <div className="navSliderLists">
            {
              navSliderDataGroup.length > 0 ? navSliderDataGroup.map((item: any, index: any) =>
                <div className="navSliderList" key={index}>
                  {item.title}
                </div>
              ) : null
            }
          </div>
        </div>
      )
    } else {
      renderNav = (null)
    }
    return (
      <div>
        {renderNav}
      </div>
    )
  }
}

export default NavSlider;
