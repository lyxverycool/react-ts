//定义待办事项
const backLogItems = [{
  title: "代打卡提醒",
  number: 132,
  imgsrc: require('../../assets/img/icon_daidaka.png')
}, {
  title: "假期审批",
  number: 22,
  imgsrc: require('../../assets/img/icon_jiaqi.png')
},
{
  title: "合同到期预警",
  number: 432,
  imgsrc: require('../../assets/img/icon_hetong.png')
}, {
  title: "加班审批",
  number: 562,
  imgsrc: require('../../assets/img/icon_jiaban.png')
}];
//入口
const entranceData = [
  {
    title: "导入员工花名册",
    imgsrc: require('../../assets/img/icon_huamingce.png')
  }, {
    title: "新增员工",
    imgsrc: require('../../assets/img/icon_rili.png')
  }
  , {
    title: "设置管理",
    imgsrc: require('../../assets/img/icon_shezhi.png')
  }
  , {
    title: "公司账户",
    imgsrc: require('../../assets/img/icon_huamingce.png')
  }
  , {
    title: "员工生日",
    imgsrc: require('../../assets/img/icon_rili.png')
  }
  , {
    title: "发布公告",
    imgsrc: require('../../assets/img/icon_shenpi.png')
  }
]
//公告消息
const noticeList = {
  message: [
    {
      id: "111",
      title: '系统更新通知',
      time: '2017-04-02'
    }, {
      id: "222",
      title: '员工异动模块调整',
      time: '2017-04-02'
    }, {
      id: "333",
      title: '今天要发工资',
      time: '2017-04-02'
    }, {
      id: "444",
      title: '花名册导入优化',
      time: '2017-04-02'
    }, {
      id: "555",
      title: '2018年清明放假通知',
      time: '2017-04-02'
    }, {
      id: "666",
      title: 'Stifen转正',
      time: '2017-04-02'
    }
  ],
  notice: [{
    id: "111",
    title: '222',
    time: '2017-04-02'
  }, {
    id: "222",
    title: '33333',
    time: '2017-04-02'
  }, {
    id: "333",
    title: '44444',
    time: '2017-04-02'
  }, {
    id: "444",
    title: '5555',
    time: '2017-04-02'
  }, {
    id: "555",
    title: '6666',
    time: '2017-04-02'
  }, {
    id: "666",
    title: '77777777',
    time: '2017-04-02'
  }]
}
const cardData = [{
  "number": 12,
  "title": "待入职",
  "href": "#",
  "className": "card-1",
  "imgsrc": require('../../assets/img/icon_dairuzhi.png')
}, {
  "number": 100,
  "title": "待转正",
  "href": "#",
  "className": "card-2",
  "imgsrc": require('../../assets/img/icon_daizhuanzheng.png')
}, {
  "number": 23,
  "title": "待调动",
  "href": "#",
  "className": "card-3",
  "imgsrc": require('../../assets/img/icon_daidiaodong.png')
}, {
  "number": 12,
  "title": "待离职",
  "href": "#",
  "className": "card-4",
  "imgsrc": require('../../assets/img/icon_dailizhi.png')
}]

const calendarData = [{
  title: "张三入职日",
  status: "level-1",
  type: '入职'
}, {
  title: "李四入职日",
  status: "level-2",
  type: '离职'
}, {
  title: "张三入职日张三入职日入职日张三入职张三入职日入职日张三入职入职日张三入职张三入职日张三入职日张三入职日张三入职日张三入职日",
  status: "finish",
  type: '提醒'
}, {
  title: "下午面试",
  status: "finish",
  type: '转正'
}, {
  title: "上午面试",
  status: "nomal",
  type: '测试'
}, {
  title: "下午面试",
  status: "finish",
  type: '转正'
}, {
  title: "上午面试",
  status: "nomal",
  type: '测试'
}]

export { backLogItems, entranceData, noticeList, cardData, calendarData };