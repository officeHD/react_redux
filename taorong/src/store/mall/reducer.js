 
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-07-25 14:27:43
 */
import{CHANGE_MALL_TYPE,CHANGE_MALL_ACTIVE} from '../ui/action';
 

let defaultMall = {
  mallType: "insure",
  catalog: [
    { name: "意外险", value: '1' },
    { name: "重疾险", value: '2' },
    { name: "年金险", value: '3' },
    { name: "医疗", value: '4' },
    { name: "卡单", value: '5' }
  ],
  insureList: [
    { name: "意外险", value: '1' },
    { name: "重疾险", value: '2' },
    { name: "年金险", value: '3' },
    { name: "医疗", value: '4' },
    { name: "卡单", value: '5' }

  ],
  gift: [
    { name: "讯车", value: '1' },
    { name: "迅医", value: '2' },
    { name: "讯娃", value: '3' }

  ],
  catalogIndex: '1',
  saleList: [
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
    },
    {
      imgpath: "http://192.168.1.234:8080/mstps/static/trscript/img/product/icon.png",//图片路径
      title: "产品案例",// 名称
      minPrice: 725,//价格
      saleNum: 5635,//销售量
      profit: '15%',//收益
      ageAtIssue: "30天-50周岁",//投保年龄
      insurancePeriod: "70周岁-终身",//保险期限
      point: [{ title: "重大疾病保险金", val: "5万元" }, { title: "轻症疾病保险金", val: "1.5万元，三次" }, { title: "轻症豁免", val: "豁免后期保险费" }],//产品特点
      type: '1',//类型
      url: '#/goods/121'//产品链接
    }
  ]//热卖
}
// 首页数据
export const mallData = (state = defaultMall, action = {}) => {
  switch (action.type) {
    case  CHANGE_MALL_TYPE:
      let current = defaultMall.insureList;
      if (action.value === "gift") {
        current = defaultMall.gift;
      }
      return { ...state, mallType: action.value, catalog: current, catalogIndex: '1' }
    case  CHANGE_MALL_ACTIVE:
      return { ...state, catalogIndex: action.value }

    default:
      return state;
  }
}

