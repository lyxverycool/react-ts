import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/header/Index';
import WorkbenchTitle from '../components/workbenchTitle/Index';
import Nav from '../components/nav/Index';
import Home from "../pages/home/index";
import IhrCalendar from "../pages/calendar/index";
import '../assets/less/index.less';
import '../assets/less/layout.less';


class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = {
			collapsed: false
		}
	}
	onChangeCollapsed = (collapsed: any) => {
		const expension = collapsed;
		this.setState({ collapsed: expension })
	}
	public render() {
		const collapsed = this.state.collapsed;
		return (
			<div className="irenshi-container">
				<Header collapsed={collapsed} />
				<WorkbenchTitle collapsed={collapsed} onChangeCollapsed={this.onChangeCollapsed} />
				<div className="body-content">
					<Nav collapsed={collapsed} />
					<div className={collapsed ? 'content' : 'content-expansion'} >
						<Switch>
							<Route path="/home" exact={true} component={Home} />
							<Route path="/" component={IhrCalendar} />
							<Redirect to="/" />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;