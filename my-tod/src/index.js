import React,{Component} from "react";
import ReactDOM from "react-dom";
import MainModel from "./components/main";
import HeadModel from "./components/header";
import FooterModule from "./components/footer.js";
import "./css/index.css"
class App extends Component{
  constructor(){
    super();
    this.state = {
      val:'',
      data:[
      //   {txt:'11111111',checked:false,id:1},
      //   {txt:'2222222222222',checked:false,id:2}
     ],
     footer:"none",
     num:0,
     onOff:true,
     has:'#/all'
    }
  }
  changeval=(newval)=>{
      this.setState({
        val:newval
      })
  }
    changeData = (newData) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.unshift(newData);
    this.setState({
      data:data2,
      val:''
    })
  }
  //选中事件
 chch = (id) => {
    let {data} = this.state;
    let data2 = Object.assign(data);
    data2.forEach(e=>{
      if(e.id === id){
        e.checked = !e.checked
      }
    });
    this.setState({
      data:data2
    })
  }
  //全选按钮
  allchange=(ev)=>{
    let {data}=this.state
    let data2=Object.assign(data)
    let {checked}=ev.target
    //console.log(checked)
    data2.forEach((e)=>{
      e.checked=checked
    })
    this.setState({
      data:data2
    })
  }
  //删除
  remove=(id)=>{
      let {data}=this.state
      let data2=null
      data2=data.filter((e)=>{
        return e.id !=id
      })
      this.setState({
        data:data2
      })
  }
  //双击改变文字内容事件
 changeText=(newData)=>{
     let {data}=this.state
     let data2=Object.assign(data)
     data2.forEach((e,i)=>{
       if (e.id==newData.id) {
         data2.splice(i,1,newData)
       }
     })
     this.setState({
      data:data2
     })
 }
 //footer 点击选项事件
 chanfoot=((tarhas)=>{
    this.setState({
      has:tarhas
   })
})
//清除完成项
clearcli=(()=>{
   let data=this.state.data;
   let data2=Object.assign(data)
   data2=data2.filter((e) => {
      return !e.checked
   })
   this.setState({
      data:data2
   })
})
  render(){
    let {data}=this.state
    let data2=Object.assign(data)//克隆 start 中的 data项
    let len=data.length
    let list=null;
    //当footer class名改变的时候数据发生改变
   let  data3=data2.filter((e) => {
      if (e.checked)len--;
      switch (this.state.has) {
        case '#/active':
            return !e.checked;
            break;
        case '#/completed':
            return e.checked;
            break;
         default:
            return Object.assign(data);
            break;
      }
   })
    list=data3.map((e,i)=>{
      let data={
        key:i,
        txt:e.txt,
        id:e.id,
        checked:e.checked,
        chch:this.chch,
        remove:this.remove,
        dbclick:this.dbclick,
       changeText:this.changeText
      }
      return<MainModel {...data}/>
    })
   let  all= null;
//输入时有内容，render里面的内容会有所改变 所以 显示footer
    if(data2.length){
      all=data2.every((e)=>{
         return e.checked
      })
      this.state.footer='block'
   }else {
      all=false
      this.state.footer='none'
   }
   if (this.state.onOff) {
      this.state.num=data2.length
      data2.forEach((e)=>{
         if (e.checked==true) {
            this.state.num--
         }
      })
   }

   let arr2={
      n:this.state.num,
      footer:{display:this.state.footer},
      chanfoot:this.chanfoot,
      has:this.state.has,
      clearcli:this.clearcli
   }
    return (
      <div>
        <HeadModel
            changeData={this.changeData}
            val={this.state.val}
            changeval={this.changeval}
            />
         <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            checked={all}
            onChange={this.allchange}
            />
          <ul className="todo-list">
            {list}
          </ul>
         </section>
         <FooterModule {...arr2}/>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
