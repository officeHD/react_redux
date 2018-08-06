
/*
 * @Author: haungDong 
 * @Date: 2018-07-03 18:12:37 
 * @Last Modified by: haungDong QQ96497144
 * @Last Modified time: 2018-08-06 18:51:07
 */
import { SELECT_SPEC, DECREASE, INCREASE } from './action';
let defaultGoodState = {
    imglist: [
        "https://img.alicdn.com/imgextra/i2/2549841410/TB2JXt0iKuSBuNjSsziXXbq8pXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i1/2549841410/TB2j.40XDqWBKNjSZFxXXcpLpXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i2/2549841410/TB2OzPAX49YBuNjy0FfXXXIsVXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i2/2549841410/TB2dWzvX29TBuNjy0FcXXbeiFXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i1/2549841410/TB2p3pjantYBeNjy1XdXXXXyVXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/imgextra/i3/2549841410/TB27fzxXVuWBuNjSspnXXX1NVXa_!!2549841410.jpg_2200x2200Q90s50.jpg_.webp",
        "https://img.alicdn.com/tfs/TB1eETPsVOWBuNjy0FiXXXFxVXa-1125-924.png"
    ],
    parame: [
        { title: "基本信息", content: "" },
        { title: "品牌", content: "penfolds/奔富 " },
        { title: "系列", content: "洛神西拉赤霞珠  " },
        { title: "套装规格", content: "单支  " },
        { title: "酒精度", content: "13%(含)-14%vol(不含)  " },
        { title: "葡萄酒种类", content: "红葡萄酒  " }
    ],
    spec: [
        {
            name: "网络类型", pid: "10004", cid: '709990523', values: [
                { vid: "709990523", name: "无需合约版", sortOrder: "0" }
            ]
        },
        {
            name: "机身颜色", pid: "1627207", values: [
                { vid: "28328", name: "金色", image: "//gw.alicdn.com/bao/uploaded/i2/TB1L0qVNXXXXXcpXVXXtjm_9XXX_035404.jpg", sortOrder: "1" },
                { vid: "28341", name: "黑色", image: "//gw.alicdn.com/bao/uploaded/i5/TB1pYPbNXXXXXa2XpXXe7a29XXX_035328.jpg", sortOrder: "10" },
                { vid: "43832396", name: "亮黑色", image: "//gw.alicdn.com/bao/uploaded/i7/TB14k2gNXXXXXczXXXXO5uY9XXX_035306.jpg", sortOrder: "11" },
                { vid: "3470059", name: "玫瑰金色", image: "//gw.alicdn.com/bao/uploaded/i1/TB1zc2lNXXXXXaRXXXXk.jX9XXX_035416.jpg", sortOrder: "12" },
                { vid: "28330", name: "银色", image: "//gw.alicdn.com/bao/uploaded/i4/TB18.iONXXXXXXTapXXntC69XXX_035348.jpg", sortOrder: "13" }
            ]
        },
        {
            name: "套餐类型", pid: "5919063", values: [
                { vid: "6536025", name: "官方标配", sortOrder: "2" },
                { vid: "3266779", name: "套餐一", sortOrder: "4" },
                { vid: "3266781", name: "套餐二", sortOrder: "5" },
                { vid: "3266785", name: "套餐三", sortOrder: "6" },
                { vid: "3266786", name: "套餐四", sortOrder: "7" },
                { vid: "3266789", name: "套餐五", sortOrder: "8" }
            ]
        }
    ],
    goodsName: "澳大利亚进口奔富洛神西拉赤霞珠红葡萄酒6支",
    price: 288,
    oprice: 388,
    postage: "免",
    sales: 32471,
    delivery: "合肥",
    quantity: 1
}
// 首页数据
export const goodsData = (state = defaultGoodState, action = {}) => {
    switch (action.type) {
        case SELECT_SPEC:
            state.spec.forEach((item) => {
                if (action.index == item.pid) {
                    item.cid = action.value;
                }
            })
            return { ...state };

        case INCREASE:
            state.quantity++;
            return { ...state };
        case DECREASE:
            state.quantity--
            return { ...state };
        default:
            return state;
    }
}