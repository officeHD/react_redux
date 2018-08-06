 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 12:00:28
 */
import * as home from './action';


let defaultMainState = {
  Carousellist: [
    {
      name: 'iconfont-阿里巴巴矢量图标库',
      target: 'http://www.baidu.com',
      img: "http://192.168.1.234:8080/mstps/static/trscript/img/banner/banner.png"
    }, {
      name: 'iconfont-阿里巴巴矢量图标库',
      target: 'http://www.baidu.com',
      img: "http://192.168.1.234:8080/mstps/static/trscript/img/banner/banner2.png"
    }
  ],//轮播图数据
  NewsList: [
    { name: 'iconfont-阿里巴巴矢量图标库', target: 'http://www.baidu.com' },
    { name: 'iconfont-阿里巴巴矢量图标库', target: 'http://www.baidu.com' },
    { name: 'iconfont-阿里巴巴矢量图标库', target: 'http://www.baidu.com' }
  ],//新闻数据
  mainTheme: { title: "让爱回家", brief: "健康关爱先回家", imgpath: '' },//主题
  mainSale: { title: "全车无忧", brief: "按驾座均分", imgpath: '', minPrice: 725 },//主卖
  catalog: [
    { name: "意外险", value: '1' },
    { name: "重疾险", value: '2' },
    { name: "年金险", value: '3' },
    { name: "卡单", value: '4' },
    { name: "信贷", value: '5' },
    { name: "信贷", value: '6' },
    { name: "信贷", value: '7' },
    { name: "礼品", value: '8' }
  ],
  catalogIndex: '1',
  hotSale: [
    {
      imgpath: "http://192.168.1.234:8080/mstps/static/trscript/img/product/icon.png",//图片路径
      title: "意外险",// 名称
      minPrice: 725,//价格
      saleNum: 545,//销售量
      profit: '15%',//收益
      ageAtIssue: "28天-50周岁",//投保年龄
      insurancePeriod: "70周岁-终身",//保险期限
      point: [{ title: "重大疾病保险金", val: "5万元" }, { title: "轻症疾病保险金", val: "1.5万元，三次" }, { title: "轻症豁免", val: "豁免后期保险费" }],//产品特点
      type: '1',//类型
      url: '../product/huagui/index.html'//产品链接

    },
    {
      imgpath: "http://192.168.1.234:8080/mstps/static/trscript/img/product/icon.png",//图片路径
      title: "重疾险",// 名称
      minPrice: 725,//价格
      saleNum: 5635,//销售量
      profit: '15%',//收益
      ageAtIssue: "30天-50周岁",//投保年龄
      insurancePeriod: "70周岁-终身",//保险期限
      point: [{ title: "重大疾病保险金", val: "5万元" }, { title: "轻症疾病保险金", val: "1.5万元，三次" }, { title: "轻症豁免", val: "豁免后期保险费" }],//产品特点
      type: '2',//类型
      url: '../product/anxin/index.html'//产品链接
    }
  ]//热卖

}
// 首页数据
export const mainData = (state = defaultMainState, action = {}) => {
  switch (action.type) {

    case home.CHANGE_TABINDEX:
      return { ...state, catalogIndex: action.value };
    default:
      return state;
  }
}
let defaultLearingState = {
  catalog: [
    { name: "学习", value: '1' },
    { name: "淘融动画", value: '2' }
  ],

  catalogIndex: '1',
  learingList: [
    {
      title: "新闻标题",
      shareNum: '121',
      commentNum: '10',
      img: "http://192.168.1.234:8080/mstps/static/trscript/img/title.png",
      id: 1
    },
    {
      title: "新闻标题",
      shareNum: '121',
      commentNum: '10',
      img: "http://192.168.1.234:8080/mstps/static/trscript/img/title.png",
      id: 2
    },
    {
      title: "新闻标题",
      shareNum: '121',
      commentNum: '10',
      img: "http://192.168.1.234:8080/mstps/static/trscript/img/title.png",
      id: 3
    }
  ],
  animationList: [
    {
      title: "新闻标题",

      img: "http://192.168.1.234:8080/mstps/static/trscript/img/animate.png",
      id: 1
    },
    {
      title: "新闻标题新闻标题新闻标题",

      img: "http://192.168.1.234:8080/mstps/static/trscript/img/animate.png",
      id: 2
    },
    {
      title: "新闻标题",

      img: "http://192.168.1.234:8080/mstps/static/trscript/img/animate.png",
      id: 3
    }
  ]
}

// 淘融界数据
export const learingData = (state = defaultLearingState, action = {}) => {
  switch (action.type) {

    case home.CLEARDATA:
      return { ...state, ...defaultMainState };
    default:
      return state;
  }
}


