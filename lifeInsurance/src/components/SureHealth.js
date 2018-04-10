 

import React, {Component} from 'react';
 
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import style from './asset/css/index.less'
 
export default class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <TitleBarStepContainer />
                <div className={style.article}>
                    <p className={style.article_title}> <strong>被保人健康告知</strong> </p>
                    <p> 请提供“部分情况有”或“以上情况全无”的答案。 </p>
                    <p> 1、您是否参与任何危险的运动或赛事（职业潜水、跳伞、滑翔、高峰攀岩、探险、武术比赛、摔跤比赛、特技表演、赛马、赛车、驾驶或乘坐非民航客机的私人飞行活动）？</p>
                    <p> 2、你是否准备前往或曾经居住在具有战乱风险的国家或地区？</p>
                    <p> 3、您是否有被保险公司拒绝承保，或加费承保，或延期承保，或附加特别约定承保的经历？</p>
                    <p> 4、您是否以被保险人的身份在其他保险公司投保人身保险，且保额超过50万？</p>
                    <p> 5、您是否患有或曾经患有:恶性肿瘤、白血病、中风（脑出血、脑梗塞）、心功能不全、严重高血压 (血压高于180/110 mmHg)、心肌梗塞、心肌病、肝硬化、肾功能不全、再生障碍性贫血、系统性红斑狼疮、癫痫、肢体残疾或瘫痪、精神或智力障碍、阿尔兹海默氏病（老年痴呆）、帕金森氏病、重症肌无力、多发性硬化症、失明、瘫痪、先天性疾病、遗传性疾病、艾滋病、服用或吸食成瘾性药物？</p>
                    <p>未成年人适用:<br/> 6、被保险人在我司及其他保险公司投保的人身险保险金额总额是否超过监管规定（不满10周岁20万、10周岁以上50万）？</p>
                </div>       
                <ul className={style.bottom_btns}>
                    <li className={style.white} onClick={e=>this.props.handelClick(0)}> 部分情况有 </li>
                    <li className={style.normal} onClick={e=>this.props.handelClick(1)}> 以上情况全无 </li>
                </ul> 
            </div>
        )
    };
}