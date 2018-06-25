import * as React from 'react';
class NavSliderCollapsed extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSlider: false,
      showSliderExpend: false, //三级导航
      sliderExpendData: {
        group: []
      }
    }
    this.navSliderShow = this.navSliderShow.bind(this);
    this.navSliderHide = this.navSliderHide.bind(this);
    this.navSliderExpendHide = this.navSliderExpendHide.bind(this);
    this.navSliderExpendShow = this.navSliderExpendShow.bind(this);
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
  navSliderExpendShow(item: any) {
    this.setState({
      sliderExpendData: item,
      showSliderExpend: true
    })
  }
  navSliderExpendHide(item: any) {
    this.setState({
      showSliderExpend: false
    })
  }
  render() {
    const showSlider = this.state.showSlider || this.props.showSlider;
    const navSliderData = this.props.navSliderData;
    const subNavData = this.props.navSliderData.children || [];
    let renderNav;
    if (navSliderData !== {}) {
      renderNav = (
        <div>
          <div className={showSlider ? "navSlider navSliderCollapsed sliderShow" : "navSlider navSliderCollapsed sliderHide"}
            onMouseEnter={this.navSliderShow} onMouseLeave={this.navSliderHide}>
            <div className="title">
              <img src={require("../../assets/img/apply.png")} alt="" />
              <span>{navSliderData.title}</span>
            </div>
            <div className="navSliderLists" onMouseEnter={this.navSliderExpendShow} onMouseLeave={this.navSliderExpendHide}>
              {
                subNavData.length > 0 ? subNavData.map((item: any, index: any) =>
                  <div className="navSliderList" key={index} onMouseEnter={this.navSliderExpendShow.bind(this, item)} >
                    {item.title}
                  </div>
                ) : null
              }
              {
                this.state.sliderExpendData.group.length > 0 && this.state.showSliderExpend ? (
                  <div className="navSlider navSliderCollapsedExpend sliderShow">
                    <div className="title text-center">
                      <span>{this.state.sliderExpendData.title}</span>
                    </div>
                    <div className="navSliderLists">
                      {
                        this.state.sliderExpendData.group.map((item: any, index: any) =>
                          <div className="navSliderList" key={index}>
                            {item.title}
                          </div>
                        )
                      }
                    </div>
                  </div>
                ) : null
              }
            </div>
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

export default NavSliderCollapsed;
