/**
 * @component constants
 * @description Http 服务
 * @time 2018/05/09
 * @author Mike.Cai
 */

export default class FetchHttp {
    contentType: string;
    credentials: string;
    mode: string;
    constructor() {
        this.contentType = "application/json;charset=UTF-8";
        this.credentials = "include";
        this.mode = "cors";
    }
    handlerErr(e: any, url: any): any {
        return Promise.reject("网络异常，请稍后重试！");
    }
    async fetchData(url: string, reqtype: string, options: any) {
        // console.log(url);
        let data = {};
        if (reqtype === "get") {
            data = {
                method: reqtype,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: this.credentials as any
            }
        } else {
            data = {
                method: reqtype,
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: this.credentials as any,
                body: (reqtype === "get" ? "" : JSON.stringify(options)) || ""
            }
        }
        const response = await fetch(url, data).catch(e => this.handlerErr(e, url));
        if (!response.ok) {
            // store.dispatch('setLoading',false);
            if (response.status === 401) {
                console.log('登录过期');
            } else {
                //抛出异常
                // console.log("抛出异常...");
                return Promise.reject((JSON.parse(await response.text()) as any))
            }
        } else {
            // if (response.status === 302) {
            //     message.error('登录过期，请重新登录！');
            //     setTimeout(() => {
            //         location.replace('/login');
            //     }, 1000);
            // }
            // store.dispatch('setLoading',false);
            if (reqtype === "post") {
                // setTimeout(function () {
                //     location.reload();
                // }, 1500)
            } else {
                //此情况由于“用户启用／禁用”接口不规范特殊处理
                // if(url.indexOf("/user/disable") >=0 || url.indexOf("/user/enable") >=0) {
                //     (<any>window).Wui.Message.success("操作成功！");
                //     setTimeout(function(){
                //         location.reload();
                //     },1500)
                // }
            }
        }
        return response;
    }

    get(url: string, options: any) {
        const fetchUrl = this.serializeParme(url, options);
        return this.fetchData(fetchUrl, 'get', {}).then(d => d.json()).catch(e => console.log(e));
    }

    post(url: string, options: any) {
        return this.fetchData(url, 'post', options).then(d => d.json()).catch(e => console.log(e));
    }
    // 接口问题，i人事接口不规范
    // post(url: string, options: any) {
    //     return this.fetchData(url, 'post', options).then(d => d.json()).catch((e:any) => {
    //         return e;
    //     });
    // }

    delete(url: string, options: any) {
        return this.fetchData(url, 'delete', options).then(d => d.json()).catch(e => console.log(e));
    }

    serializeParme(url: string, options: any) {
        let urlPath: string = url;
        if (options) {
            const paramsArray: any = [];
            //拼接参数  
            Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]))
            if (url.search(/\?/) === -1) {
                urlPath += '?' + paramsArray.join('&')
            } else {
                urlPath += '&' + paramsArray.join('&')
            }
        }
        return urlPath;
    }
}
