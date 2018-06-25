import * as React from 'react';
import CardLeft from "../../components/cardAll/CardLeft";
import CardRight from "../../components/cardAll/CardRight";
import BackLog from '../../components/backLog/Index';
import ReportPie from '../../components/reportPie/Index';
import ReportColumn from '../../components/reportColumn/Index';
import IhrCalendar from '../../components/calendar/Index';
import Entrance from '../../components/entrance/Index';
import Risk from '../../components/risk/Index';
import Notice from '../../components/notice/Index';
import { Row, Col } from 'antd';
import { backLogItems, entranceData, noticeList, cardData, calendarData } from './homeTxt';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GetListAction } from '../../actions/home';
import "../../assets/less/workbench.less";

class Home extends React.Component<any, any> {
	constructor(props: any, context: any) {
		super(props, context);
		this.onWindowResize = this.onWindowResize.bind(this);
	}
	componentDidMount() {
		// this.props.GetListAction().data.then((res: any) => {
		// })
		window.addEventListener('resize', this.onWindowResize)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	}
	onWindowResize() {
		const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
		if (scrollWidth <= 1366) {
			console.log(11)
		}
	}
	public render() {
		return (
			<main className="workbench">
				<div className="workbench-left">
					<Row gutter={20}>
						<Col span={12}>
							<CardLeft cardData={cardData} />
							<BackLog backLogItems={backLogItems} />
							<ReportPie />
							<ReportColumn />
						</Col>
						<Col span={12}>
							<CardRight cardData={cardData} />
							<IhrCalendar calendarData={calendarData} />
							<Entrance entranceData={entranceData} />
						</Col>
					</Row>
				</div>
				<div className="workbench-right">
					<div className="ad">
						<img src={require('../../assets/img/banner1.png')} alt="" />
					</div>
					<Row gutter={10}>
						<Col span={12}>
							<div className="commonComponet goHref text-center">
								<img src={require('../../assets/img/icon_cankaopng.png')} alt="" />
								<div className="title">
									参考资料
								</div>
							</div>
						</Col>
						<Col span={12}>
							<div className="commonComponet goHref text-center">
								<img src={require('../../assets/img/icon_falv.png')} alt="" />
								<div className="title">
									政策云
								</div>
							</div>
						</Col>
					</Row>
					<Risk />
					<Notice noticeData={noticeList} />
					<div className="ad">
						<img src={require('../../assets/img/banner2.png')} alt="" />
					</div>
					<div className="ad">
						<img src={require('../../assets/img/banner3.png')} alt="" />
					</div>
				</div>
			</main>
		)
	}
}
function mapStateToProps(state: any) {
	const homeState = state.homeReducer;
	return homeState; // {name: user.name,age: user.age,sex: user.sex,address: user.address };
}

function mapDispatchToProps(dispatch: any) {
	return {
		GetListAction: bindActionCreators(GetListAction, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


