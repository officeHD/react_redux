import React, {Component} from 'react'
import data from '../reducers/data.json'
import style from './asset/css/index.less'
import { Toast } from 'antd-mobile';

export default class OutPut extends Component{
  constructor(props){
        super(props);
  }
  componentWillUnmount() {
    //当页面卸载时，要关闭选择器
    this.props.onClose()
  }
  render() {
    if(!sessionStorage.jobList||!this.props.isShow){
      return null;
    }
    const jobList=JSON.parse(sessionStorage.jobList) 
 
    let title="职业大类",
    list=jobList;
    
    if(this.props.category===0){
      title="职业大类";
      
    }else if(this.props.category===1){
      title="职业中类";
      jobList.map((item,index)=>{
        if(item.code===this.props.category1_code){
          list= item.occupations;
        
        }
      })
     
    } else if(this.props.category===2){
      title="职业小类";
      jobList.map((item,index)=>{
        if(item.code===this.props.category1_code){
           item.occupations.map((items,index)=>{
              if(items.code===this.props.category2_code){
                list= items.occupations;
                console.log(list)
              }
           }) 
        }
      })
    } else if(this.props.category===3){
      title="详细职业";
      jobList.map((item,index)=>{
        if(item.code===this.props.category1_code){
           item.occupations.map((items,index)=>{
              if(items.code===this.props.category2_code){
                  items.occupations.map((itemss,index)=>{
                    if(itemss.code===this.props.category3_code){
                      list= itemss.occupations;
                    }
                  })
              }
           }) 
        }
      })
    }
    console.log(this.props.category)
    let listShows = null;
      listShows = list.map((item, index) => {
        return (<li key={index} onClick={e => this.props.onClickJob(item.category,item.cname,item.code)}>{item.cname}</li>)
      })

    return (
      <div className={style.occupation}>
        <div className={style.o_head}>
          <h2>请选择{ title}</h2>
          <span dangerouslySetInnerHTML={{__html: this.props.btn}} onClick={e => this.props.onClickBtn(this.props.category)}></span>
        </div>
        <div className={style.o_body}>
          <ol>
            {listShows}
          </ol>
        </div>

      </div>
    )
  }

}
