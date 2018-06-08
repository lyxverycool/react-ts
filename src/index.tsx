import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ConfigureStore from './store/configureStore';
import AppRoute from './router/index';
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// antd组件库样式
import registerServiceWorker from './registerServiceWorker';
import { changeHello } from './actions/home';

// import GlobalConfig from './pages/Home';
// console.log('xxx')
// console.log(new GlobalConfig());
//window.GlobalConfig = GlobalConfig;
// const globalConig:any = (window as any).ClassOutOfTS();
// globalConig.GlobalConfig = GlobalConfig;
// (window as any).GlobalConfig = GlobalConfig;

const store = ConfigureStore();
store.dispatch(changeHello("opopopoppo"));
// console.log(store.getState());
(window as any).GlobalConfig = store.getState();

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <LocaleProvider locale={zhCN}>
                    <AppRoute />
                </LocaleProvider>
            </HashRouter>
        </Provider>
    ),

    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
