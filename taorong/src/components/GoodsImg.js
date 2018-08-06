import React, { Component } from 'react'
 
export default class GoodsImg extends Component {
    render() {
         let imgList=this.props.list.map((item,index)=>{
             return <img style={{display:"block"}} key={index} src={item}/>
         })
        return (
            <div>
               {imgList}
            </div>
        )
    }
}
