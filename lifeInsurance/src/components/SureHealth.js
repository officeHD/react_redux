 

import React from 'react';
import More from './public/More'
import TitleBarStepContainer from '../containers/TitleBarStepContainer'
import style from './asset/css/index.less'
 


const SureHealth = ({content,healthy,handelClick}) =>{
    
    let showList =content.map((item, index) => { 
        return (<li key={index}>{item.name} <More more={item.items}/></li>)
   })
    return(
        <div>
             <TitleBarStepContainer />
            <div className={style.article}>
                <ol className={style.artitle}>
                    {showList}
                </ol>
            </div>   
            {healthy==="1"?
            <div className={style.healthy}>
                    <div className={style.mask}>
                    </div>
                    <div className={style.tip}>
                        <p>很抱歉,被保人告知情况不符合投保要求，需要跟保险顾问咨询后进行投保，请联系客服确认后再进行投保！</p>
                        <a href="tel:400691234"><span>400-69-1234</span></a>
                    </div>
                    <ul className={style.bottom_btns}>
                    <li className={style.white} onClick={e=>handelClick("2")}>选错啦</li>
                    <li className={style.normal} onClick={e=>handelClick("3")}>查看其它产品</li>
                </ul> 
                </div>:
            <ul className={style.bottom_btns}>
                <li className={style.white} onClick={e=>handelClick("1")}>部分情况有</li>
                <li className={style.normal} onClick={e=>handelClick("0")}>以上全无</li>
            </ul> 
            }
        </div>
    )
}  

export default SureHealth
 